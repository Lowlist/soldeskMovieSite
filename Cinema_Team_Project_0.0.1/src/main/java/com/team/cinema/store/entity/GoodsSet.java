package com.team.cinema.store.entity;

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
@Table(name = "goodsSet")
public class GoodsSet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int no;

	@Column(name = "setNoOne")
	private int setNoOne;

	@Column(name = "setNoTwo")
	private int setNoTwo;
	
	@Column(name = "setNoThree")
	private int setNoThree;
	
	@Column(name = "setNoFour")
	private int setNoFour;

	@Column(name = "price")
	private int price;

	@Column(name = "salePrice")
	private int salePrice;

	@Column(name = "count")
	private int count;

	@Column(name = "img")
	private String img;

	@Column(name = "createdAt")
	private LocalDateTime createdAt;

	@Column(name = "updatedAt")
	private LocalDateTime updatedAt;

	@PrePersist
	protected void onCreate() {
		LocalDateTime now = LocalDateTime.now();
		createdAt = now;
		updatedAt = now;
	}

	@PreUpdate
	protected void onUpdate() {
		updatedAt = LocalDateTime.now();
	}

}
