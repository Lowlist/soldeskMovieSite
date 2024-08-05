package com.team.cinema.member.controller;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.team.cinema.member.entity.User;
import com.team.cinema.member.repository.UserRepository;
import com.team.cinema.member.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private UserService userService;
	
	 @Autowired
	private UserRepository userRepository;

	 @Autowired
	 private BCryptPasswordEncoder pwEncoder;
	
	@PostMapping("/signUp")
	@Operation(summary = "회원가입", description = "유저 회원가입시 등록 API", tags = {"User"})
	public ResponseEntity<String> signUp(@RequestBody User user) {
	    
	    // 디버깅을 위해 user 객체의 필드를 확인
	    System.out.println("Received user: " + user);

	    userService.saveUser(user);
	    
	    System.out.println("확인 : signUp");
	    return ResponseEntity.ok("회원가입 성공");
	}
	
	@PostMapping("/signIn")
	@Operation(summary = "로그인", description = "유저 로그인 시도 API", tags = {"User"})
    public ResponseEntity<Map<String, String>> signIn(@RequestBody User user, HttpServletRequest request) {
        if (user.getId() == null || user.getId().isEmpty() ||
            user.getPassword() == null || user.getPassword().isEmpty()) {
//            System.out.println("아이디와 비밀번호가 비어있습니다.");
            return ResponseEntity.badRequest().body(Map.of("message", "아이디와 비밀번호를 입력해주세요."));
        }

        Optional<User> userOptional = userRepository.findById(user.getId());
        
        if (userOptional.isPresent() && pwEncoder.matches(user.getPassword(), userOptional.get().getPassword())) {
        	User storedUser = userOptional.get();
        	HttpSession session = request.getSession();
            session.setAttribute("userId", storedUser.getId()); // 세션에 사용자 ID 저장
//            session.setAttribute("userRole", storedUser.getRole()); // 세션에 사용자 역할 저장
            session.setAttribute("userPassword", storedUser.getPassword()); // 세션에 사용자 이메일 저장
         //   System.out.println("세션 저장 완료: " + session.getAttribute("userId") + ", " + session.getAttribute("userPassword"));
       
            return ResponseEntity.ok(Map.of("userId", storedUser.getId()));
        } else {
        	return ResponseEntity.status(401).body(Map.of("message", "아이디 또는 비밀번호가 올바르지 않습니다."));
        }
    }
	
	@PostMapping(value = "/registerCheck")
	@Operation(summary = "ID 중복체크", description = "회원가입시 ID 중복 체크 API", tags = {"User"})
	public ResponseEntity<Integer> registerCheck(@RequestBody User user) {
		// user 객체 또는 ID 값 검증
		//System.out.println("resterCheck" + user);
	    if (user == null || user.getId() == null || user.getId().trim().isEmpty()) {
	        return ResponseEntity.badRequest().body(0); // 잘못된 요청에 대한 응답
	    }


	    // ID로 사용자 조회
	    Optional<User> userOptional = userRepository.findById(user.getId());

	    if (userOptional.isPresent()) {
	        return ResponseEntity.ok(0); // ID가 이미 존재함을 의미
	    }

	    return ResponseEntity.ok(1); // ID가 사용 가능함을 의미
	}
	
	/*
	 * @PostMapping("/uploadFile") public String uploadFile(HttpServletRequest
	 * request, HttpSession session) throws IOException { MultipartRequest multi =
	 * null; int fileMaxSize = 40 * 1024 * 1024; // 40MB String
	 * savePath=request.getServletContext().getRealPath("/save");
	 * 
	 * try { multi = new MultipartRequest(request, savePath, fileMaxSize, "UTF-8",
	 * new DefaultFileRenamePolicy()); } catch (Exception e) { e.printStackTrace();
	 * return "redirect:/memImageForm.do"; }
	 * 
	 * String memID = multi.getParameter("memID"); String newProfile = ""; File file
	 * = multi.getFile("memProfile");
	 * 
	 * if (file != null) { String ext =
	 * file.getName().substring(file.getName().lastIndexOf(".") + 1).toUpperCase();
	 * if (ext.equals("PNG") || ext.equals("GIF") || ext.equals("JPG")) { String
	 * oldProfile = memberMapper.getMember(memID).getMemProfile(); File oldFile =
	 * new File(savePath + "/" + oldProfile); if (oldFile.exists()) {
	 * oldFile.delete(); } newProfile = file.getName(); // Save newProfile to the
	 * database (not shown here) } else { if (file.exists()) { file.delete(); }
	 * return "redirect:/memImageForm.do"; } } else { return
	 * ""; }
	 * 
	 * return ""; }
	 */
	 
	 
	@PostMapping("/uploadFile")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("memID") String memID) {
        try {
            String fileName = userService.uploadProfile(memID, file);
            return ResponseEntity.ok("파일 업로드 성공: " + fileName);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("파일 업로드 실패");
        }
    }
	
	
	 @PostMapping("/logout")
	    public ResponseEntity<String> logout(HttpSession session) {
	        session.invalidate();
	        return ResponseEntity.ok("로그아웃 성공");
	    }
}
