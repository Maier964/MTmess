package com.project.MTmess.Repository;

import com.project.MTmess.Model.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<UserEntity, Integer> { ;
}
