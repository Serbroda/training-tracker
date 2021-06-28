package de.rottstegge.trainingtracker.service.impl;

import de.rottstegge.trainingtracker.model.User;
import de.rottstegge.trainingtracker.repository.UserRepository;
import de.rottstegge.trainingtracker.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getUserByUsername(String username) {
        LOG.info("Getting user {}", username);
        return userRepository.findByUsernameIgnoreCase(username);
    }
}
