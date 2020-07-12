package com.example.Shopping.Application.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="category")

@ToString
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="category_name")
	private String categoryname;
	public Category() {
		
	}

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	public Set<Clothes> getClothes() {
		return clothes;
	}

	public void setClothes(Set<Clothes> clothes) {
		this.clothes = clothes;
	}

	public Category(long id, String categoryname) {
		super();
		this.id = id;
		this.categoryname = categoryname;
		
	}

	@OneToMany(cascade=CascadeType.ALL, mappedBy="category")
	 @JsonManagedReference
	private Set<Clothes> clothes;
}
