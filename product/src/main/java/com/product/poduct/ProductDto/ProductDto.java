package com.product.poduct.ProductDto;

import lombok.*;

//data transer object (json type object)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductDto {

    //implement the data transer  object
    private int productId;
    private String productName;
    private int productPrice;



}
