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

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getSetNoOne() {
		return setNoOne;
	}

	public void setSetNoOne(int setNoOne) {
		this.setNoOne = setNoOne;
	}

	public int getSetNoTwo() {
		return setNoTwo;
	}

	public void setSetNoTwo(int setNoTwo) {
		this.setNoTwo = setNoTwo;
	}

	public int getSetNoThree() {
		return setNoThree;
	}

	public void setSetNoThree(int setNoThree) {
		this.setNoThree = setNoThree;
	}

	public int getSetNoFour() {
		return setNoFour;
	}

	public void setSetNoFour(int setNoFour) {
		this.setNoFour = setNoFour;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(int salePrice) {
		this.salePrice = salePrice;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
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
	
}
