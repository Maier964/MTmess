package com.project.ThoMaiessenger.Logic;

public class InvalidPasswordException extends Exception{

    public InvalidPasswordException(String errMsg){
        super(errMsg);
    }
}
