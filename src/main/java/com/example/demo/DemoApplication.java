package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    // Simple API: GET request at /api/students
    @GetMapping("/api/students")
    public List<String> getStudents() {
        return List.of("Himanshu", "Rohit", "Aman");
    }
}
