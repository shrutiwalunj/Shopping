package com.example.Shopping.Application.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Shopping.Application.entity.Clothes;
import com.example.Shopping.Application.repository.ClothesRespository;

@Service
public class ClothesService {
	@Autowired
	private ClothesRespository crepo;

	public List<Clothes> getAllClothes()
	{
		List<Clothes> clothes=new ArrayList<>();
		crepo.findAll()
		.forEach(clothes::add);
		return clothes;
	}

	public Optional<Clothes> getCloth(Long id) {
		return crepo.findById(id);
	}
	public void addCloth(Clothes cloth) {
		
		crepo.save(cloth);
	}
	public void updateCloth(Clothes cloth) {
		crepo.save(cloth);
	}
	public void deleteCloth(Long id) {
		crepo.deleteById(id);
	}
}



