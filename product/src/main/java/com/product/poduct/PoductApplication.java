package com.product.poduct;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

public class PoductApplication {

	public static void main(String[] args) {

		SpringApplication.run(PoductApplication.class, args);
	}
	//use to model mapper handle in java springboot container
	@Bean
	public ModelMapper modelMapper(){
		return new  ModelMapper();
	}

}
