package com.example.Shopping.Application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Shopping.Application.entity.Clothes;

@RepositoryRestResource(collectionResourceRel="clothes",path="clothes")
@CrossOrigin("http://localhost:4201")
public interface ClothesRespository extends JpaRepository<Clothes,Long>{

}
