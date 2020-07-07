package com.example.Shopping.Application.config;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.support.ConfigurableConversionService;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.core.event.ValidatingRepositoryEventListener;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;

import com.example.Shopping.Application.entity.Clothes;
import com.example.Shopping.Application.repository.ClothesRespository;
import com.fasterxml.jackson.databind.ObjectMapper;


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
		config.getCorsRegistry()
			.addMapping("/**")
			.allowedOrigins("http://localhost:4200");
	}

	
}
