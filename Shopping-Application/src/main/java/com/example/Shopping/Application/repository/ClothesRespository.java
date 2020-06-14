package com.example.Shopping.Application.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Shopping.Application.entity.Clothes;

@RepositoryRestResource(collectionResourceRel="clothes",path="clothes")
public interface ClothesRespository extends JpaRepository<Clothes,Long>{

	@RestResource(path = "categoryid")
	Page<Clothes> findByCategoryId(@Param("id") Long id, Pageable pageable);

	@RestResource(path = "searchbykeyword")
	Page<Clothes> findByNameContaining(@Param("name") String keyword, Pageable pageable);
}
