package com.project.MTmess.Model;

import com.project.MTmess.Exception.InvalidEmailException;
import com.project.MTmess.Exception.InvalidPasswordException;
import com.project.MTmess.Exception.InvalidUsernameException;
import org.hibernate.annotations.Type;
import org.jetbrains.annotations.NotNull;


import javax.persistence.*;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Table(name = "Users")
@Entity
public class UserEntity{

    public UserEntity(){} // Empty constructor needed according to JPA requirements

    @Id @GeneratedValue(strategy = GenerationType.AUTO)// auto increment for new entries
    private Integer ID;

    @Column
    private String name;



    @Column
    private String email;

    @Column(nullable = false)
    private String hashed_password;

    @Column
    @Type( type = "com.project.MTmess.Util.GenericArrayUserType" )
    private String[] friends_hash;

    @Column
    @Type( type = "com.project.MTmess.Util.GenericArrayUserType" )
    private String[] messages_hash;


    public UserEntity(String username, String email, String password){
        try{
            setName(username);
            setEmail(email);
            setPassword(password);
        }
        catch (InvalidUsernameException exp){
            exp.printStackTrace();
        }
        catch (InvalidEmailException exp){
            this.name = null;
            exp.printStackTrace();
        }
        catch (InvalidPasswordException exp){
            this.name = null;
            this.email = null;
            exp.printStackTrace();
        }
    }

    public Integer getID() {
        return ID;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getHashed_password() {
        return hashed_password;
    }

    public String[] getFriends_hash() {
        return friends_hash;
    }

    public String[] getMessages_hash() {
        return messages_hash;
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

    public void setName(String username) throws InvalidUsernameException {
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

        this.name = username;
    }

    public void setPassword(String password) throws InvalidPasswordException{ // First used for Initialisations.


        if ( !password.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*](?=\\S+$).{6,30}$") )
            throw new InvalidPasswordException("Password doesn't contain at least 1 uppercase letter " +
                    "one lowercase letter, one digit and one special character and more than 6 characters in total");


        this.hashed_password = password;
    }

    public void setHashed_password(String hashed_password) {
            this.hashed_password = hashed_password;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public void setFriends_hash(String[] friends_hash) {
        this.friends_hash = friends_hash;
    }

    public void setMessages_hash(String[] messages_hash) {
        this.messages_hash = messages_hash;
    }

    public String getHash(@NotNull String inp)
    {

        try {

            MessageDigest md5 = MessageDigest.getInstance("MD5");

            byte[] msgDigest = md5.digest(inp.getBytes());

            BigInteger i = new BigInteger(1, msgDigest);

            String hash = i.toString(16);

            while ( hash.length() < 32){
                hash = "0" + hash;
            }
            return hash;

        }

        catch ( NoSuchAlgorithmException exep) {
            throw new RuntimeException(exep);
        }


    }
}
