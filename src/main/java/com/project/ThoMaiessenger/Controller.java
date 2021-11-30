package com.project.ThoMaiessenger;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class Controller {
    @GetMapping("/api/default")
    public String hello(){
        return "Hi, server time is " + new Date() + "\n";
    }
}
