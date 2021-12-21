package com.project.MTmess.Model;

public class ChatMessage {

    private String content;
    private String sender;
    private String receiver;
    private MessageState type;

    public enum MessageState{ CHAT, LEAVE, JOIN }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public MessageState getType() {
        return type;
    }

    public void setType(MessageState type) {
        this.type = type;
    }
}
