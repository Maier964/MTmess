package com.project.MTmess.Service;

import com.project.MTmess.Model.UserEntity;
import com.project.MTmess.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserEntity saveUser(UserEntity user) {

        UserEntity userAux = userRepository.findByName(user.getName());

        System.out.println(userAux);
        if (userAux == null) {
            return userRepository.save(user);
        }
        System.out.println("User already exists");
        return null;
    }

    public UserEntity findByName(String name){
        return userRepository.findByName(name);
    }

    public UserEntity findByNameAndHashedpassword(String name, String hashed_password){
        UserEntity aux = new UserEntity();
        hashed_password = aux.getHash(hashed_password);
        return userRepository.findByNameAndHashedpassword(name, hashed_password);
    }

    public List<UserEntity> findAll(){
        return userRepository.findAll();
    }
}
