package com.project.MTmess.Controller;

import com.project.MTmess.Model.UserEntity;
import com.project.MTmess.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    // Dependency injection of UserService object
    // We will have a UserService object which is created somewhere else
    @Autowired
    private UserService userService;

    // Method that lets the user send a request to the server for adding a specific user
    // Receives a parameter of type UserEntity in the body of the request, in JSON format
    @PostMapping("/add")
    public String add(@RequestBody UserEntity user){
        try {
            // Hashes the password that was given by the user in the request
            user.setHashedpassword( user.getHash( user.getHashedpassword() ) );
            userService.saveUser(user);
            return "User was added!";
        }catch ( Exception e ) {
            return "Failed to add user.";
        }
    }

    // Pass in the name as a parameter in the url to see if the user exists in the database
    // If they exist you'll get them, if they don't you'll get an empty page, but still code 200
    @GetMapping("/find")
    public ResponseEntity<UserEntity> getUserByName(@RequestParam String name){
        return new ResponseEntity<>(userService.findByName(name), HttpStatus.OK);
    }

    // Pass in the name and password (not hashed) as parameters in the url to see if the user exists in the database
    // If they exist you'll get them, if they don't you'll get an empty page, but still code 200
    @GetMapping("/find/log")
    public ResponseEntity<UserEntity> findByNameAndHashedpassword(@RequestParam String name, @RequestParam String password){
        return new ResponseEntity<>(userService.findByNameAndHashedpassword(name,password), HttpStatus.OK);
    }

    // Fetch all entries in the user database
    @GetMapping("/find/all")
    public ResponseEntity<List<UserEntity>> findAll(){
        return new ResponseEntity<>( userService.findAll() , HttpStatus.OK );
    }
}
