package com.example.AgreeConnect.controller;

import com.example.AgreeConnect.dto.UserDto;
import com.example.AgreeConnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(value = "api/v1/")


public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/adduser")
    public UserDto addUser(@RequestBody UserDto userDto){
        return userService.saveUser(userDto);
    }

}
