package com.project.MTmess.Controller;

import com.project.MTmess.Model.ChatMessage;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController // Handles incoming messages and sends them to the users.
public class ChatController {

    @MessageMapping("/chat/{username}") // same as configured endpoint for the broker
    public void sendMessage(@DestinationVariable String username, ChatMessage message){
        System.out.println("handling sent message..." + message + "to: " + username);

        // Check if username exists in our storage... FindByUsername needs to be implemented here
    }
}
