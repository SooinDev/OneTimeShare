package com.example.onetimeshare.controller;

import com.example.onetimeshare.dto.ShareResponse;
import com.example.onetimeshare.service.ShareService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequiredArgsConstructor
public class ShareController {

    private final ShareService shareService;

    @GetMapping("/")
    public String home() {
        return "create";
    }

    @GetMapping("/share/{token}")
    public String viewShare(@PathVariable String token, Model model, HttpServletRequest request) {
        ShareResponse response = shareService.viewShare(token, request);
        model.addAttribute("response", response);

        if (!response.isSuccess()) {
            return "expired";
        }

        return "view";
    }
}
