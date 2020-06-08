package com.example.Shopping.Application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ShoppingApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ShoppingApplication.class, args);
	}

}
