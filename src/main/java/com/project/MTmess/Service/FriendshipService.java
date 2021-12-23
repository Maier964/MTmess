package com.project.MTmess.Service;

import com.project.MTmess.Model.FriendshipEntity;

import java.util.List;

public interface FriendshipService {
    FriendshipEntity saveFriendship( FriendshipEntity friendship);
    List<FriendshipEntity> findAllByUser1OrUser2(String user1, String user2);
}
