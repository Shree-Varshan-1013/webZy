package com.webzy.jwt.configuration;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
//public class CorsConfiguration {
//	
//	private static final String[] METHOD = {"GET", "PUT", "POST", "DELETE"};
//	
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				
//				registry.addMapping("/**")
//						.allowedMethods(METHOD[0], METHOD[1], METHOD[2], METHOD[3])
//						.allowedHeaders("*")
//						.allowedOriginPatterns("http://localhost:5173")
//						.allowCredentials(true);
//			}
//		};
//	}
//}

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {
	
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("Content-Type", "Authorization")
                .allowCredentials(true)
                .maxAge(3600);
    }
    
}
