package Entity;

import com.project.MTmess.Logic.User;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.ArrayList;

@Table(name = "Users")
@Entity
public class UserEntity{

    @Id @GeneratedValue
    private Integer ID;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String hashed_password;

    @ElementCollection
    private ArrayList<Integer> friends; // add user object hash here.

    @ElementCollection
    private ArrayList<Integer> messages; // add message object hash here.
}
