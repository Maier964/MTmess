package com.project.MTmess.Model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.project.MTmess.Logic.User;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Table(name = "Users")
@Entity
public class UserEntity{

    public UserEntity() { ; } // Empty constructor needed according to JPA requirements

    @Id @GeneratedValue(strategy = GenerationType.AUTO) // auto increment for new entries
    private Integer ID;

    @Column
    private String name;

    @Column
    private String email;

    @Column(nullable = false)
    private String hashed_password;

//    @Type(type = "list-array")
//    @Column( columnDefinition = "integer[]")
//    private List<User> friends; // add user object hash here.
//
//    @Type(type = "list-array")
//    @Column ( columnDefinition = " integer[] ")
//    private List<Integer> messages; // add message object hash here.


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
