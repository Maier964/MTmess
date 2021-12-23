package com.project.MTmess.Controller;

import com.project.MTmess.Model.MessageEntity;
import com.project.MTmess.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/message")
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/add")
    public String add(@RequestBody MessageEntity message){
        messageService.saveMessage(message);
        return "Message was added";
    }
}
