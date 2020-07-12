package com.example.Shopping.Application.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Shopping.Application.entity.Category;
import com.example.Shopping.Application.service.CategoryService;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/category")
	public List<Category> getAllCategories()
	{
		return categoryService.getAllCategories();
	}
	
	@RequestMapping("/category/{id}")
	public Optional<Category>  getCategory(@PathVariable Long id) {
		return categoryService.getCategory(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/category")
	public void addCategory(@RequestBody Category cloth) {
		categoryService.addCategory(cloth);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/category/{id}")
	public void updateCategory(@RequestBody Category cloth,@PathVariable Long id) {
		categoryService.updateCategory(id,cloth);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/category/{id}")
	public void deleteCategory(@PathVariable Long id) {
		categoryService.deleteCategory(id);
	}
	
	
}
