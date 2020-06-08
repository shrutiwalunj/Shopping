package com.example.Shopping.Application.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.example.Shopping.Application.entity.Clothes;
import com.example.Shopping.Application.repository.ClothesRespository;


@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
	@Autowired
	private ClothesRespository cr;
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config)
	{
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
				.map(Type::getJavaType)
				.toArray(Class[]::new));
	}
}
