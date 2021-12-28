package com.project.MTmess.Service;

import com.project.MTmess.Exception.InvalidMessageException;
import com.project.MTmess.Model.MessageEntity;

import java.util.List;

public interface MessageService {
    MessageEntity saveMessage( MessageEntity message) throws InvalidMessageException;
    List<MessageEntity> findAllBySenderOrReceiver(String sender, String receiver);
}
