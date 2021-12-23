package com.project.MTmess.Service;

import com.project.MTmess.Model.MessageEntity;

import java.util.List;

public interface MessageService {
    MessageEntity saveMessage( MessageEntity message);
    List<MessageEntity> findAllBySenderOrReceiver(String sender, String receiver);
}
