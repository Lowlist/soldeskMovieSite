//package com.team.cinema.config;
//
//import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.context.annotation.Bean;
//import org.springframework.web.filter.CharacterEncodingFilter;
//import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
//// web.xml
//public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer{
//
//	@Override
//	protected Class<?>[] getRootConfigClasses() {
//		// TODO Auto-generated method stub
//		return new Class[] { SecurityConfig.class  };
//	}
//
//	@Override
//	protected Class<?>[] getServletConfigClasses() {
//		// TODO Auto-generated method stub
//		return new Class[] { ServletConfig.class };
//	}
//
//	@Override
//	protected String[] getServletMappings() {
//		// TODO Auto-generated method stub
//		return new String[] { "/" };
//	}
//
////	 @Bean
////	    public CharacterEncodingFilter characterEncodingFilter() {
////	        CharacterEncodingFilter filter = new CharacterEncodingFilter();
////	        filter.setEncoding("UTF-8");
////	        filter.setForceEncoding(true);
////	        return filter;
////	    }
//	 @Bean
//	    public FilterRegistrationBean<CharacterEncodingFilter> characterEncodingFilterRegistration() {
//	        FilterRegistrationBean<CharacterEncodingFilter> registration = new FilterRegistrationBean<>();
//	        registration.setFilter(new CharacterEncodingFilter("UTF-8", true));
//	        registration.addUrlPatterns("/*"); // 필터를 적용할 URL 패턴을 지정합니다.
//	        return registration;
//	    }
//}
//
//	
