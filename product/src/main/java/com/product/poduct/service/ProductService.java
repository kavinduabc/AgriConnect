package com.product.poduct.service;

import com.product.poduct.ProductDto.ProductDto;
import com.product.poduct.model.Product;
import com.product.poduct.repo.ProductRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<ProductDto> getAllProduct() {
        List<Product> productList = productRepo.findAll();
        return modelMapper.map(productList, new TypeToken<List<ProductDto>>() {}.getType());
    }

    public ProductDto addProduct(ProductDto productDto){
        productRepo.save(modelMapper.map(productDto, Product.class));
        return productDto;
    }

    public ProductDto updateProduct(ProductDto productDto) {

        productRepo.save(modelMapper.map(productDto, Product.class));
        return productDto;
    }


    public String deleteProduct(int id) {
        productRepo.deleteById(id);
        return "Product with ID " + id + " is deleted";
    }

}
