package com.project.MTmess.Service;

import com.project.MTmess.Model.MessageEntity;
import com.project.MTmess.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Override
    public MessageEntity saveMessage(MessageEntity message){
        return messageRepository.save(message);
    }
}
