package com.example.onetimeshare.controller;

import com.example.onetimeshare.dto.CreateShareRequest;
import com.example.onetimeshare.dto.ShareResponse;
import com.example.onetimeshare.service.ShareService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {

    private final ShareService shareService;

    @PostMapping("/share")
    public ResponseEntity<ShareResponse> createShare(@Valid @RequestBody CreateShareRequest request, HttpServletRequest httpRequest) {
        ShareResponse response = shareService.createShare(request, httpRequest);
        return ResponseEntity.ok(response);
    }
}
