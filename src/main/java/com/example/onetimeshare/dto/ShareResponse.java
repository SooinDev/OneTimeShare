package com.example.onetimeshare.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShareResponse {

    private String token;

    private String shareUrl;

    private String dataType;

    private String content;

    private String fileName;

    private String fileType;

    private String fileData;

    private LocalDateTime expiresAt;

    private boolean success;

    private String message;
}
