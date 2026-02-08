package com.example.onetimeshare.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "shared_data")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SharedData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 64)
    private String token;

    @Column(nullable = false, length = 20)
    private String dataType;

    @Lob
    @Column(nullable = false, columnDefinition = "MEDIUMTEXT")
    private String encryptedContent;

    @Column(length = 255)
    private String fileName;

    @Column(length = 100)
    private String fileType;

    @Column(nullable = false)
    private boolean isViewed;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    @Column
    private LocalDateTime viewedAt;

    @Column(length = 45)
    private String creatorIp;

    @Column(length = 45)
    private String viewerIp;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        isViewed = false;
    }
}
