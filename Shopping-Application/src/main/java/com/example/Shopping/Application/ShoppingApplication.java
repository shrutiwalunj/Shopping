package com.example.Shopping.Application;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@SpringBootApplication
public class ShoppingApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ShoppingApplication.class, args);
	}
	

}
