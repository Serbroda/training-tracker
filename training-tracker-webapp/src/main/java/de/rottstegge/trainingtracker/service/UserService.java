package de.rottstegge.trainingtracker.service;

import de.rottstegge.trainingtracker.model.User;

import java.util.List;

public interface UserService {

    User getUserByUsername(String username);

    List<User> getAll();
}
