package com.project.MTmess.Controller;


import com.project.MTmess.Model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import java.util.Objects;

@Controller
public class ChatController {


    @MessageMapping("/chat.register")
    @SendTo("/chat/public") // we send it to the simple broker
    public ChatMessage register(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) { // to capture requests
        Objects.requireNonNull(headerAccessor.getSessionAttributes()).put(chatMessage.getReceiver(), chatMessage.getSender());
        return chatMessage;
    }

    @MessageMapping("/chat.send")
    @SendTo("/chat/pubic")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage){
        return chatMessage;
    }
}
