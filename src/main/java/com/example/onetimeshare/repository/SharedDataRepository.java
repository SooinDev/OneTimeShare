package com.example.onetimeshare.repository;

import com.example.onetimeshare.entity.SharedData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface SharedDataRepository extends JpaRepository<SharedData, Long> {

    Optional<SharedData> findByTokenAndIsViewedFalse(String token);

    @Modifying
    @Query("DELETE FROM SharedData s WHERE s.expiresAt < :now OR s.isViewed = true")
    int deleteExpiredOrViewed(@Param("now") LocalDateTime now);

    long countByCreatedAtAfter(LocalDateTime since);
}
