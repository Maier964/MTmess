package com.project.ThoMaiessenger.Logic;

public class InvalidUsernameException extends Exception{

    public InvalidUsernameException(String errorMessage){
        super(errorMessage); // Implement default exception functionality
    }
}