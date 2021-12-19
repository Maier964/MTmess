package com.project.MTmess.Logic;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class User {

    private String username;
    private String email;
    private String password;
    private ArrayList<User> friends;

//    public User() { ; }

    public User(String username, String email, String password){
        try{
            setUsername(username);
            setEmail(email);
            setPassword(password);
        }
        catch (InvalidUsernameException exp){
            exp.printStackTrace();
        }
        catch (InvalidEmailException exp){
            this.username = null;
            exp.printStackTrace();
        }
        catch (InvalidPasswordException exp){
            this.username = null;
            this.email = null;
            exp.printStackTrace();
        }
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) throws InvalidUsernameException {
        if ( username.equals("") )
            throw new InvalidUsernameException("Error in validating username. Username is null.");

        if ( username.length() <= 5 )
            throw new InvalidUsernameException("Error in validating username. Username must be at least 6 characters long.");

        if ( username.contains(" ") )
            throw new InvalidUsernameException("Error in validating username. Username must not contain spaces");

        String regex = "^[a-zA-Z0-9]+$";

        Pattern p = Pattern.compile(regex);

        Matcher match = p.matcher(username);

        if ( !match.matches() )
            throw new InvalidUsernameException("Error in validating username. Username must not contain special characters.");

        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) throws InvalidEmailException{

        String regex = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|" +
                "}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-" +
                "\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:" +
                "[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25" +
                "[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]" +
                "?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\" +
                "x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])"; // best email regex (or so they said)

        Pattern p = Pattern.compile(regex);

        Matcher m = p.matcher(email);   if (!m.matches())   throw new InvalidEmailException("Invalid email.");

        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) throws InvalidPasswordException{


        if ( !password.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*](?=\\S+$).{6,30}$") )
            throw new InvalidPasswordException("Password doesn't contain at least 1 uppercase letter " +
                    "one lowercase letter, one digit and one special character and more than 6 characters in total");


        this.password = password;
    }

    public ArrayList<User> getFriends() {
        return friends;
    }

    public void setFriends(ArrayList<User> friends) {
        this.friends = friends;
    }
}
