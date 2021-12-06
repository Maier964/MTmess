package com.project.ThoMaiessenger.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class Controller_HTTP {

    @GetMapping("/api/backend") // Backend hosted on http://localhost:8080/api/backend
    public String start(){
        return "Hi, server time is " + new Date() + "\n";
    }

    @GetMapping("api/backend2")
    public String what_now(){
        return "Will this also show in react?"; // Answer : Not by default, needs to be forked in react
    }
}