package com.project.MTmess.Model;

import org.hibernate.annotations.Type;


import javax.persistence.*;


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


    public String[] getFriends_hash() {
        return friends_hash;
    }

    public void setFriends_hash(String[] friends_hash) {
        this.friends_hash = friends_hash;
    }

    public String[] getMessages_hash() {
        return messages_hash;
    }

    public void setMessages_hash(String[] messages_hash) {
        this.messages_hash = messages_hash;
    }




    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHashed_password() {
        return hashed_password;
    }

    public void setHashed_password(String hashed_password) {
        this.hashed_password = hashed_password;
    }
}
