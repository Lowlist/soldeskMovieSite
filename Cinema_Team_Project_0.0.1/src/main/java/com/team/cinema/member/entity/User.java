package com.team.cinema.member.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "member")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
<<<<<<< HEAD

    @Column(name = "id", nullable = true)
    private String id;

    @Column(name = "pw", nullable = true)
    private String password;

    @Column(name = "nickname", nullable = true)
    private String nickName;

    @Column(name = "name", nullable = true)
    private String userName;

    @Column(name = "birth", nullable = true)
    private String birthDate;

    @Column(name = "gender", nullable = true)
    private String gender;

    @Column(name = "email", nullable = true)
    private String email;

    @Column(name = "phone", nullable = true)
    private String mobile;

    @Column(name = "profile", nullable = true)
    private String profile;

	@Column(name = "address", nullable = true) 
	private String address;

    @Column(name = "createdAt", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updatedAt", nullable = false)
    private LocalDateTime updatedAt;

    // Getters and setters
    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

	 public String getAddress() { return address; }
	
	 public void setAddress(String address) { this.address = address; }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @PrePersist
=======
    
    @Column(name = "id", nullable = false)
    private String id;
    
    @Column(name = "pw", nullable = false)
    private String password;
    
    @Column(name = "nickName", nullable = false)
    private String nickName;
    
    @Column(name = "name", nullable = false)
    private String userName;
    
    @Column(name = "birth", nullable = false)
    private String birthDate;
    
    @Column(name = "gender", nullable = false)
    private String gender;
    
    @Column(name = "email", nullable = false)
    private String email;
    
    @Column(name = "phone", nullable = false)
    private String mobile;
    
    @Column(name = "profile", nullable = false)
    private String profile;
    
    @Column(name = "address", nullable = false)
    private String address;
    
    @Column(name = "createdAt", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updatedAt", nullable = false)
    private LocalDateTime updatedAt;
    
//    @Column(name = "role", nullable = false)
//    private String role;
    
    public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}
	
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getProfile() {
		return profile;
	}
	public void setProfile(String profile) {
		this.profile = profile;
	}
	
//	//관리자
//	public String getRole() {
//		return role;
//	}
//	public void setRole(String role) {
//		this.role = role;
//	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	@PrePersist
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
<<<<<<< HEAD

=======
    // Getters and setters
    
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
    @Override
    public String toString() {
        return "User{" +
                "no=" + no +
                ", id='" + id + '\'' +
                ", password='" + password + '\'' +
                ", userName='" + userName + '\'' +
                ", nickName='" + nickName + '\'' +
<<<<<<< HEAD
                ", birthDate='" + birthDate + '\'' +
=======
                ", birthDate=" + birthDate +
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", mobile='" + mobile + '\'' +
                ", profile='" + profile + '\'' +
<<<<<<< HEAD
=======
//                ", role='" + role + '\'' +
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                ", address='" + address + '\'' +
                '}';
    }
}