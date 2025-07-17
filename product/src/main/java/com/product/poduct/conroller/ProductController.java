package com.product.poduct.conroller;

import com.product.poduct.ProductDto.ProductDto;
import com.product.poduct.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/getproducts")
    public List<ProductDto> getProducts() {
        return productService.getAllProduct();
    }

    @PostMapping("/addproduct")
    public ProductDto addProduct(@RequestBody ProductDto productDto) {
        return productService.addProduct(productDto);
    }

    @PutMapping("/updateproduct")
    public ProductDto updateProduct(@RequestBody ProductDto productDto){
        return productService.updateProduct(productDto);
    }

    @DeleteMapping("/deleteproduct/{id}")
    public String deleteProduct(@PathVariable int id) {
        return productService.deleteProduct(id);
    }

}
