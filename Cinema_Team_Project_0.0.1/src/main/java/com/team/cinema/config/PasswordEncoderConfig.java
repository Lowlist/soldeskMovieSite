package com.team.cinema.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class PasswordEncoderConfig {

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	    http
	        .authorizeHttpRequests(authorize -> authorize
<<<<<<< HEAD
	            .requestMatchers("/member/signIn", "/member/signUp", "/member/registerCheck").permitAll() // 인증 없이 접근 허용
=======
	            .requestMatchers("/member/signIn", "/member/signUp").permitAll() // 인증 없이 접근 허용
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
	            //재원이형 해줘
	            .anyRequest().authenticated() // 나머지 요청은 인증 필요
	        )
	        .csrf(csrf -> csrf
	            .disable() // CSRF 보호 비활성화 (개발 환경에서만)
	        );
	    return http.build();
	}

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
<<<<<<< HEAD
    
=======


>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
}