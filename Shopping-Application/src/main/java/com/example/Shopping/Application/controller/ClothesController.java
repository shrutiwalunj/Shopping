package com.example.Shopping.Application.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Shopping.Application.entity.Category;
import com.example.Shopping.Application.entity.Clothes;
import com.example.Shopping.Application.service.ClothesService;

@RestController

public class ClothesController {
	
	@Autowired
	private ClothesService clothesService;
	
	@RequestMapping("category/clothes")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Clothes> getAllClothes()
	{
		return clothesService.getAllClothes();
	}
	
	@RequestMapping("category/clothes/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Optional<Clothes>  getCloth(@PathVariable Long id) {
		return clothesService.getCloth(id);
	}
	@RequestMapping(method=RequestMethod.POST,value="category/{categoryid}/clothes")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addCloth(@RequestBody Clothes cloth,@PathVariable Long categoryid) {
		cloth.setCategory(new Category(categoryid,""));
		clothesService.addCloth(cloth);
	}
	@RequestMapping(method=RequestMethod.PUT,value="category/{categoryid}/clothes/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void updateCloth(@RequestBody Clothes cloth,@PathVariable Long categoryid,@PathVariable Long id) {
		cloth.setUpdatedOn(new Date());
		cloth.setId(id);
		cloth.setCategory(new Category(categoryid,""));
		clothesService.updateCloth(cloth);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="category/clothes/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteCloth(@PathVariable Long id) {
		clothesService.deleteCloth(id);
	}
	
	
}
