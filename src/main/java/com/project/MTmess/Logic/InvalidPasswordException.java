package com.project.MTmess.Logic;

public class InvalidPasswordException extends Exception{

    public InvalidPasswordException(String errMsg){
        super(errMsg);
    }
}
