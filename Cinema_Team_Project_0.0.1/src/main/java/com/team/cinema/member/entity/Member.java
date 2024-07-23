package com.team.cinema.member.entity;

import java.util.List;

import lombok.Data;

@Data
public class Member {
	 private int no;
	 private String id;
	 private String pw;
	 private String name;
	 private String nickname;
	 private String email;
	 private String phone;
	 private String date;
	 private String gender;
	 private String blob;
	 private String address;
	 private String createdTime;
	 private String updatedTime;
//	 private List<AuthVO> authList; 
}
