package com.project.MTmess.Util;

import org.jetbrains.annotations.NotNull;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker // allows it to listen / send info to ports
public class SocketConfig implements WebSocketMessageBrokerConfigurer {

    // Overriding default methods to set custom directory endpoints
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry){
        registry.addEndpoint("/chat").setAllowedOrigins("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(@NotNull MessageBrokerRegistry registry){ // MessageHandler
        registry.setApplicationDestinationPrefixes("/app").enableSimpleBroker("/topic");
    }
}
