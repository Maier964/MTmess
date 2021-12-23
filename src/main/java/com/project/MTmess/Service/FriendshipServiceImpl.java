package com.project.MTmess.Service;

import com.project.MTmess.Model.FriendshipEntity;
import com.project.MTmess.Repository.FriendshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendshipServiceImpl implements FriendshipService{

    @Autowired
    FriendshipRepository friendshipRepository;

    @Override
    public FriendshipEntity saveFriendship(FriendshipEntity friendship){
        // Check if users exist
        if (friendship.getUser1().equals(friendship.getUser2())){
            System.out.println("Vez ca is aceeasi useri");
            return null;
        }
        return friendshipRepository.save(friendship);
    }

    @Override
    public List<FriendshipEntity> findAllByUser1OrUser2(String user1, String user2){
        return friendshipRepository.findAllByUser1OrUser2(user1, user2);
    }
}
