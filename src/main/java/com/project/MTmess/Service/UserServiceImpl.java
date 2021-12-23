package com.project.MTmess.Service;

import com.project.MTmess.Model.UserEntity;
import com.project.MTmess.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }

    public UserEntity findByName(String name){
        return userRepository.findByName(name);
    }

    public UserEntity findByNameAndHashedpassword(String name, String hashed_password){
        UserEntity aux = new UserEntity();
        hashed_password = aux.getHash(hashed_password); // hashing the password so the hashes match. This could be done in any step
        return userRepository.findByNameAndHashedpassword(name, hashed_password);
    }

}
