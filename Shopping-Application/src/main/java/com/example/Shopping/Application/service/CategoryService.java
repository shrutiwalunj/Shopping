package com.example.Shopping.Application.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Shopping.Application.entity.Category;
import com.example.Shopping.Application.repository.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository categoryrepo;
	
	public List<Category> getAllCategories()
	{
		List<Category> categories=new ArrayList<>();
		categoryrepo.findAll()
		.forEach(categories::add);
		return categories;
	}

	public Optional<Category> getCategory(Long id) {
		return categoryrepo.findById(id);
	}
	public void addCategory(Category cloth) {
		categoryrepo.save(cloth);
	}
	public void updateCategory(Long id,Category cloth) {
		categoryrepo.save(cloth);
	}
	public void deleteCategory(Long id) {
		categoryrepo.deleteById(id);
	}
}



