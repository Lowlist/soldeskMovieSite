//package com.team.cinema.member.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.team.cinema.member.entity.Member;
//import com.team.cinema.member.entity.MemberUser;
//// UserDetailsService - ②
//import com.team.cinema.member.repository.MemberRepository;
//
//@Service
//public class MemberUserDetailsService implements UserDetailsService {
//
//	@Autowired
//	private MemberRepository memberRepository;
//	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// 로그인 처리 하기
//		Member mvo= memberRepository.findById(username);
//		//-->UserDetails -> implements--->User -> extends--->MemberUser
//		if(mvo != null) {
//			return new MemberUser(mvo); // new MemberUser(mvo); // Member, AuthVO
//		}else {
//	   	   throw new UsernameNotFoundException("user with username" + username + "does not exist."); 	
//		}
//	}
//
//}
