package com.example.AgreeConnect.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    private String location;
    private String phone;
    private String password;
    private String farming ;
}
