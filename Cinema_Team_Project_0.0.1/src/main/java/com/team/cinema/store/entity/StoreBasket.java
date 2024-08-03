package com.team.cinema.store.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "storeBasket")
public class StoreBasket {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
	
	@Column(name = "id")
	private String id;

	@Column(name = "title")
	private String title;

	@Column(name = "content")
	private String content;
	
	@Column(name = "price")
	private int price;
	
	@Column(name = "salePrice")
	private int salePrice;
	
	@Column(name = "count")
	private int count;
	
	@Column(name = "memberNo")
	private int memberNo;
	
	@Column(name = "foodNo", nullable = true)
	private Integer foodNo;
	
	@Column(name = "setNo", nullable = true)
	private Integer setNo;
	
	@Column(name = "goodsNo", nullable = true)
	private Integer goodsNo;
	
	@Column(name = "checkBox")
	private boolean checkBox = false;
	
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
    
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public int getMemberNo() {
		return memberNo;
	}

	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}

	public Integer getFoodNo() {
		return foodNo;
	}

	public void setFoodNo(Integer foodNo) {
		this.foodNo = foodNo;
	}

	public Integer getSetNo() {
		return setNo;
	}

	public void setSetNo(Integer setNo) {
		this.setNo = setNo;
	}

	public Integer getGoodsNo() {
		return goodsNo;
	}

	public void setGoodsNo(Integer goodsNo) {
		this.goodsNo = goodsNo;
	}

	public boolean isCheckBox() {
		return checkBox;
	}

	public void setCheckBox(boolean checkBox) {
		this.checkBox = checkBox;
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
