package com.project.MTmess.Service;


import com.project.MTmess.Model.UserEntity;
import com.project.MTmess.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List< UserEntity > getAllUsers(){
        List<UserEntity> userEntities = new ArrayList<>();
        userRepository.findAll().forEach(userEntities::add);
        return userEntities;
    }


    public void addUser( UserEntity userEntity ) { userRepository.save(userEntity); }


}
