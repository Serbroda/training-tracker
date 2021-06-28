package de.rottstegge.trainingtracker.controller.v1;

import de.rottstegge.trainingtracker.model.User;
import de.rottstegge.trainingtracker.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityNotFoundException;

@RequestMapping("/api/v1")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable("username") String username) {
        User user = userService.getUserByUsername(username);
        if(user == null) {
            throw new EntityNotFoundException("User with username '" + username + "' not found");
        }
        return ResponseEntity.ok(user);
    }
}
