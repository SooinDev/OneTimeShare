package com.example.onetimeshare.service;

import com.example.onetimeshare.dto.CreateShareRequest;
import com.example.onetimeshare.dto.ShareResponse;
import com.example.onetimeshare.entity.SharedData;
import com.example.onetimeshare.repository.SharedDataRepository;
import com.example.onetimeshare.util.EncryptionUtil;
import com.example.onetimeshare.util.TokenGenerator;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class ShareService {

    private final SharedDataRepository repository;
    private final EncryptionUtil encryptionUtil;
    private final TokenGenerator tokenGenerator;

    @Transactional
    public ShareResponse createShare(CreateShareRequest request, HttpServletRequest httpRequest) {
        try {
            String token = tokenGenerator.generateToken();
            String contentToEncrypt;

            if ("FILE".equals(request.getDataType())) {
                contentToEncrypt = request.getFileData();
            } else {
                contentToEncrypt = request.getContent();
            }

            String encryptedContent = encryptionUtil.encrypt(contentToEncrypt);

            LocalDateTime expiresAt = LocalDateTime.now().plusHours(request.getExpiresInHours());

            SharedData sharedData = SharedData.builder()
                    .token(token)
                    .dataType(request.getDataType())
                    .encryptedContent(encryptedContent)
                    .fileName(request.getFileName())
                    .fileType(request.getFileType())
                    .expiresAt(expiresAt)
                    .creatorIp(getClientIp(httpRequest))
                    .build();

            repository.save(sharedData);

            String baseUrl = getBaseUrl(httpRequest);
            String shareUrl = baseUrl + "/share/" + token;

            return ShareResponse.builder()
                    .token(token)
                    .shareUrl(shareUrl)
                    .expiresAt(expiresAt)
                    .success(true)
                    .message("공유 링크가 생성되었습니다")
                    .build();
        } catch (Exception e) {
            log.error("공유 생성 중 오류 발생", e);
            return ShareResponse.builder()
                    .success(false)
                    .message("공유 생성에 실패했습니다: " + e.getMessage())
                    .build();
        }
    }

    @Transactional
    public ShareResponse viewShare(String token, HttpServletRequest httpRequest) {
        try {
            SharedData sharedData = repository.findByTokenAndIsViewedFalse(token).orElse(null);

            if (sharedData == null) {
                return ShareResponse.builder()
                        .success(false)
                        .message("링크가 만료되었거나 존재하지 않습니다")
                        .build();
            }

            if (sharedData.getExpiresAt().isBefore(LocalDateTime.now())) {
                repository.delete(sharedData);
                return ShareResponse.builder()
                        .success(false)
                        .message("링크가 만료되었습니다")
                        .build();
            }

            String decryptedContent = encryptionUtil.decrypt(sharedData.getEncryptedContent());

            sharedData.setViewed(true);
            sharedData.setViewedAt(LocalDateTime.now());
            sharedData.setViewerIp(getClientIp(httpRequest));
            repository.save(sharedData);

            ShareResponse.ShareResponseBuilder responseBuilder = ShareResponse.builder()
                    .dataType(sharedData.getDataType())
                    .success(true)
                    .message("데이터를 성공적으로 조회했습니다");

            if ("FILE".equals(sharedData.getDataType())) {
                responseBuilder
                        .fileData(decryptedContent)
                        .fileName(sharedData.getFileName())
                        .fileType(sharedData.getFileType());
            } else {
                responseBuilder.content(decryptedContent);
            }

            return responseBuilder.build();
        } catch (Exception e) {
            log.error("공유 조회 중 오류 발생", e);
            return ShareResponse.builder()
                    .success(false)
                    .message("데이터 조회에 실패했습니다: " + e.getMessage())
                    .build();
        }
    }

    @Scheduled(cron = "${app.cleanup.cron}")
    @Transactional
    public void cleanupExpiredData() {
        int deleted = repository.deleteExpiredOrViewed(LocalDateTime.now());
        log.info("만료되거나 조회된 데이터 {}건 삭제", deleted);
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    private String getBaseUrl(HttpServletRequest request) {
        String scheme = request.getScheme();
        String serverName = request.getServerName();
        int serverPort = request.getServerPort();

        StringBuilder url = new StringBuilder();
        url.append(scheme).append("://").append(serverName);

        if ((scheme.equals("http") && serverPort != 80) ||
                (scheme.equals("https") && serverPort != 443)) {
            url.append(":").append(serverPort);
        }

        return url.toString();
    }
}
