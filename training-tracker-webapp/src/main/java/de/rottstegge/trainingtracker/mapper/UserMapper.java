package de.rottstegge.trainingtracker.mapper;

import de.rottstegge.trainingtracker.model.User;
import de.rottstegge.trainingtracker.v1.model.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.List;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto map(User source);

    List<UserDto> mapAll(List<User> sources);

    default Date map(OffsetDateTime source) {
        long epochMilli = source.toInstant().toEpochMilli();
        return new Date(epochMilli);
    }

    default OffsetDateTime map(Date source) {
        return source.toInstant().atOffset(ZoneOffset.UTC);
    }
}
