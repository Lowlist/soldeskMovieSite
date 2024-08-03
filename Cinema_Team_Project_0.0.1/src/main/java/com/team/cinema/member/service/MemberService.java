//package com.team.cinema.member.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//import com.team.cinema.member.entity.AuthVO;
//import com.team.cinema.member.entity.Member;
//import com.team.cinema.member.repository.MemberRepository;
//
//import jakarta.servlet.http.HttpSession;
//
//@Service
//public class MemberService {
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @RequestMapping("/register")
//	public String memRegister(Member m, String memPassword1, String memPassword2,
//			                  RedirectAttributes rttr, HttpSession session) {
//		if(m.getId() == null || m.getId().equals("") ||
//		   memPassword1 == null || memPassword1.equals("") ||
//		   memPassword2 == null || memPassword2.equals("") ||
//		   m.getUserName() == null || m.getUserName().equals("") || 
//		   // Add age validation if necessary based on birthDate
//		   m.getGender() == null || m.getGender().equals("") ||
//		   m.getEmail() == null || m.getEmail().equals("")){
////		   ||m.getAuthList().isEmpty()) 
//		   // 누락메세지를 가지고 가기? =>객체바인딩(Model, HttpServletRequest, HttpSession)
//		   rttr.addFlashAttribute("msgType", "실패 메세지");
//		   rttr.addFlashAttribute("msg", "모든 내용을 입력하세요.");
//		   return "redirect:/register";  // ${msgType} , ${msg}
//		}
//		if(!memPassword1.equals(memPassword2)) {
//		   rttr.addFlashAttribute("msgType", "실패 메세지");
//		   rttr.addFlashAttribute("msg", "비밀번호가 서로 다릅니다.");
//		   return "redirect:/register";  // ${msgType} , ${msg}
//		}		
//		m.setProfile(""); // 사진이미는 없다는 의미 ""
//		// 회원을 테이블에 저장하기
//		// 추가 : 비밀번호를 암호화 하기(API)
//	    String encyptPw=pwEncoder.encode(m.getPassword());
//	    m.setPassword(encyptPw);
//	    // register() 수정
//		int result=memberService.register(m);
//		if(result==1) { // 회원가입 성공 메세지
//		   // 추가 : 권한테이블에 회원의 권한을 저장하기
//		   List<AuthVO> list=m.getAuthList();	
//		   for(AuthVO authVO : list) {
//			   if(authVO.getAuth()!=null) {
//				   AuthVO saveVO=new AuthVO();
//				   saveVO.setMemID(m.getMemID()); //회원아이디
//				   saveVO.setAuth(authVO.getAuth()); //회원의권한
//				   memberMapper.authInsert(saveVO);
//			   }
//		   }
//		   rttr.addFlashAttribute("msgType", "성공 메세지");
//		   rttr.addFlashAttribute("msg", "회원가입에 성공했습니다.");
//		   // 회원가입이 성공하면=>로그인처리하기
//		   return "redirect:/memLoginForm.do";
//		}else {
//		   rttr.addFlashAttribute("msgType", "실패 메세지");
//		   rttr.addFlashAttribute("msg", "이미 존재하는 회원입니다.");
//		   return "redirect:/memJoin.do";
//		}		
//	}
//    
//    
//    
//    
//    
//    
//    
//    public Member register(Member member) {
//        return memberRepository.save(member);
//    }
//}