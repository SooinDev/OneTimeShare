package com.example.onetimeshare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class OnetimeshareApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnetimeshareApplication.class, args);
	}

}
