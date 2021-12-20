package com.project.MTmess.Controller;


import com.project.MTmess.Model.UserEntity;
import com.project.MTmess.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody UserEntity user){
        try {
            user.setHashed_password( user.getHash( user.getHashed_password() ) );
            userService.saveUser(user);
            return "User was added!";
        }catch ( Exception e ) {
            return "<html><body><h1>Failed to add user.</h1></body></html>";
        }
    }
}
