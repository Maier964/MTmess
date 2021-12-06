package com.project.MTmess.Logic;

public class MainTest {

    public static void main(String[] args){
        User hello = new User("Henryyy", "hendrst@gmail.com","ASDascv125@#");

        System.out.println( hello.getUsername() + " " +  hello.getEmail() + " " +hello.getPassword() );
    }
}
