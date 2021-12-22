package com.project.MTmess.Controller;


import com.project.MTmess.Model.UserEntity;
import com.project.MTmess.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class DatabaseController {

    @Autowired
    private UserService userService;


    @PostMapping("/add")
    public String add(@RequestBody UserEntity user){
        try {
            user.setHashedpassword( user.getHash( user.getHashedpassword() ) );
            userService.saveUser(user);
            return "User was added!";
        }catch ( Exception e ) {
            return "Failed to add user.";
        }
    }

    @GetMapping("/find")
    public ResponseEntity<UserEntity> getUserByName(@RequestParam String name){
        return new ResponseEntity<>(userService.findByName(name), HttpStatus.OK);
    }

    @GetMapping("/find/log") // Using the same route throws no error, we just need to be careful when choosing the GET parameters
    public ResponseEntity<UserEntity> findByNameAndHashedpassword(@RequestParam String name, @RequestParam String password){
        return new ResponseEntity<>(userService.findByNameAndHashedpassword(name,password), HttpStatus.OK);
    }
}
