package com.team.cinema.member.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "admin")
public class AuthVO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    private int role;
    private String menu;
    private String name;

    @ManyToOne
    @JoinColumn(name = "no", referencedColumnName = "no", insertable = false, updatable = false)
    private Member member;
	
}
