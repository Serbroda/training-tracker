package de.rottstegge.trainingtracker.controller.v1;

import de.rottstegge.trainingtracker.mapper.UserMapper;
import de.rottstegge.trainingtracker.model.User;
import de.rottstegge.trainingtracker.service.UserService;
import de.rottstegge.trainingtracker.v1.model.UserDto;
import de.rottstegge.trainingtracker.v1.server.UsersApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class UserController implements UsersApi {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Override
    public ResponseEntity<UserDto> getUserByUsername(@PathVariable("username") String username) throws Exception {
        User user = userService.getUserByUsername(username);
        if(user == null) {
            throw new EntityNotFoundException("User with username '" + username + "' not found");
        }
        return ResponseEntity.ok(UserMapper.INSTANCE.map(user));
    }

    @Override
    public ResponseEntity<List<UserDto>> getUsers() throws Exception {
        return ResponseEntity.ok(UserMapper.INSTANCE.mapAll(userService.getAll()));
    }
}
