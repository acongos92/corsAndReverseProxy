package org.example.GoodbyeService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class GoodbyeController {

    @GetMapping("/goodbye")
    public ResponseEntity<Map<String, String>> getHello() {
        return ResponseEntity.ok(Collections.singletonMap("Goodbye", "World"));
    }
}
