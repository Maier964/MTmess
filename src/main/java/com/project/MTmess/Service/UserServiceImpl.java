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
}
