package com.example.Shopping.Application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Shopping.Application.entity.Category;

@RepositoryRestResource(collectionResourceRel="category",path="category")
public interface CategoryRepository extends JpaRepository<Category,Long>{

}
