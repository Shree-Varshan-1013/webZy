package com.webzy.jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Webzy", version = "0.0.0", description = "Mobile Recharge Application", contact = @Contact(name = "Shree<3", email = "shreevarshang2003@gmail.com")))
public class JwtApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtApplication.class, args);
	}

}
