package com.example.Shopping.Application.entity;

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Entity
@Table(name="clothes")

@ToString
public class Clothes {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String sku;
	private String name;
	private String description;
	
	@Column(name="unit_price")
	private BigDecimal unitPrice;
	@Column(name="image_url")
	private String imageUrl;
	private boolean active;
	@Column(name="units_in_stock")
	private int unitsInStock;
	@Column(name="date_created")
	private Date createdOn;
	@Column(name="last_updated")
	private Date updatedOn;
	
	public Clothes() {
		
	}
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getSku() {
		return sku;
	}


	public void setSku(String sku) {
		this.sku = sku;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public BigDecimal getUnitPrice() {
		return unitPrice;
	}


	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}


	public String getImageurl() {
		return imageUrl;
	}


	public void setImageurl(String imageurl) {
		this.imageUrl = imageurl;
	}


	public boolean isActive() {
		return active;
	}


	public void setActive(boolean active) {
		this.active = active;
	}


	public int getUnitsInStock() {
		return unitsInStock;
	}


	public void setUnitsInStock(int unitsInStock) {
		this.unitsInStock = unitsInStock;
	}


	public Date getCreatedOn() {
		return createdOn;
	}


	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}


	public Date getUpdatedOn() {
		return updatedOn;
	}


	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Clothes(long id, String sku, String name, String description, BigDecimal unitPrice, String imageUrl,
			boolean active, int unitsInStock, Date createdOn, Date updatedOn) {
		super();
		this.id = id;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitPrice = unitPrice;
		this.imageUrl = imageUrl;
		this.active = active;
		this.unitsInStock = unitsInStock;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
	}


	@ManyToOne
	@JoinColumn(name="category_id",nullable=false)
	 @JsonBackReference
	private Category category;
	
	
	
}
