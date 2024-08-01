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

	@Column(name = "title")
	private String title;
	
	@Column(name = "foodNoOne")
	private int foodNoOne;
	
	@Column(name = "foodNoOneCount")
	private int foodNoOneCount;

	@Column(name = "foodNoTwo", nullable = true)
	private Integer foodNoTwo;
	
	@Column(name = "foodNoTwoCount", nullable = true)
	private Integer foodNoTwoCount;
	
	@Column(name = "drinkNoOne")
	private int drinkNoOne;
	
	@Column(name = "drinkNoOneCount")
	private int drinkNoOneCount;
	
	@Column(name = "giftNoOne", nullable = true)
	private Integer giftNoOne;
	
	@Column(name = "giftNoOneCount", nullable = true)
	private Integer giftNoOneCount;
	
	@Column(name = "giftNoTwo", nullable = true)
	private Integer giftNoTwo;
	
	@Column(name = "giftNoTwoCount", nullable = true)
	private Integer giftNoTwoCount;

	@Column(name = "content")
	private String content;

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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getFoodNoOne() {
		return foodNoOne;
	}

	public void setFoodNoOne(int foodNoOne) {
		this.foodNoOne = foodNoOne;
	}

	public int getFoodNoOneCount() {
		return foodNoOneCount;
	}

	public void setFoodNoOneCount(int foodNoOneCount) {
		this.foodNoOneCount = foodNoOneCount;
	}

	public Integer getFoodNoTwo() {
		return foodNoTwo;
	}

	public void setFoodNoTwo(Integer foodNoTwo) {
		this.foodNoTwo = foodNoTwo;
	}

	public Integer getFoodNoTwoCount() {
		return foodNoTwoCount;
	}

	public void setFoodNoTwoCount(Integer foodNoTwoCount) {
		this.foodNoTwoCount = foodNoTwoCount;
	}

	public int getDrinkNoOne() {
		return drinkNoOne;
	}

	public void setDrinkNoOne(int drinkNoOne) {
		this.drinkNoOne = drinkNoOne;
	}

	public int getDrinkNoOneCount() {
		return drinkNoOneCount;
	}

	public void setDrinkNoOneCount(int drinkNoOneCount) {
		this.drinkNoOneCount = drinkNoOneCount;
	}

	public Integer getGiftNoOne() {
		return giftNoOne;
	}

	public void setGiftNoOne(Integer giftNoOne) {
		this.giftNoOne = giftNoOne;
	}

	public Integer getGiftNoOneCount() {
		return giftNoOneCount;
	}

	public void setGiftNoOneCount(Integer giftNoOneCount) {
		this.giftNoOneCount = giftNoOneCount;
	}

	public Integer getGiftNoTwo() {
		return giftNoTwo;
	}

	public void setGiftNoTwo(Integer giftNoTwo) {
		this.giftNoTwo = giftNoTwo;
	}

	public Integer getGiftNoTwoCount() {
		return giftNoTwoCount;
	}

	public void setGiftNoTwoCount(Integer giftNoTwoCount) {
		this.giftNoTwoCount = giftNoTwoCount;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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
