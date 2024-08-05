package com.team.cinema.member.service;

<<<<<<< HEAD
import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5

import com.team.cinema.member.entity.User;
import com.team.cinema.member.repository.UserRepository;

@Service
public class UserService {
<<<<<<< HEAD
	
	@Value("${file.upload-dir}")
    private String uploadDir;
	 
=======

>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void saveUser(User user) {
        // 비밀번호 해싱
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
<<<<<<< HEAD
        System.out.print("확인 : saveUser");
//        // 사용자 저장
        userRepository.save(user);
    }


    public String uploadProfile(String memID, MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("파일이 비어 있습니다");
        }

        File saveDir = new File(uploadDir);
        if (!saveDir.exists()) {
            saveDir.mkdirs();
        }

        String fileName = file.getOriginalFilename();
        File destinationFile = new File(saveDir, fileName);

        file.transferTo(destinationFile);

        String ext = fileName.substring(fileName.lastIndexOf(".") + 1).toUpperCase();
        if (!(ext.equals("PNG") || ext.equals("GIF") || ext.equals("JPG"))) {
            destinationFile.delete();
            throw new IllegalArgumentException("지원하지 않는 파일 형식입니다");
        }

        User user = userRepository.findById(memID).orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));
        
        // 기존 프로필 사진 삭제 (옵션)
        if (user.getProfile() != null) {
            File oldFile = new File(uploadDir, user.getProfile());
            if (oldFile.exists()) {
                oldFile.delete();
            }
        }

        user.setProfile(fileName);
        userRepository.save(user);

        return fileName;
    }


=======

        // 사용자 저장
        userRepository.save(user);
    }
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
}