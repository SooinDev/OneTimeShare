package com.example.onetimeshare.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateShareRequest {

    @NotBlank(message = "데이터 타입은 필수입니다")
    private String dataType;

    private String content;

    private String fileName;

    private String fileType;

    private String fileData;

    @NotNull(message = "만료 시간은 필수입니다")
    private Integer expiresInHours;

}
