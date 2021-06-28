package de.rottstegge.trainingtracker.service;

import de.rottstegge.trainingtracker.model.User;

public interface UserService {

    User getUserByUsername(String username);
}
