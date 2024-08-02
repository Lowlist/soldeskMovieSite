//package com.team.cinema.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.filter.CharacterEncodingFilter;
//
//import com.team.cinema.member.security.MemberUserDetailsService;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public UserDetailsService memberUserDetailsService() {
//        return new MemberUserDetailsService();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        // CharacterEncodingFilter 설정
//        CharacterEncodingFilter filter = new CharacterEncodingFilter();
//        filter.setEncoding("UTF-8");
//        filter.setForceEncoding(true);
//        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//
//        // 보안 설정
//        http
//            .authorizeRequests(authorizeRequests ->
//                authorizeRequests
//                    .requestMatchers("/").permitAll()
//                    .anyRequest().authenticated()
//            )
//            .formLogin(formLogin ->
//                formLogin
//                    .loginPage("/memLoginForm.do")
//                    .loginProcessingUrl("/memLogin.do")
//                    .permitAll()
//            )
//            .logout(logout ->
//                logout
//                    .invalidateHttpSession(true)
//                    .logoutSuccessUrl("/")
//            )
//            .exceptionHandling(exceptionHandling ->
//                exceptionHandling
//                    .accessDeniedPage("/access-denied")
//            );
//
//        return http.build();
//    }
//
//}