package com.example.AgreeConnect.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private  Long id;

    private String name;
    private String email;
    private String location;
    private String phone;
    private String password;
    private String farming ;
}
