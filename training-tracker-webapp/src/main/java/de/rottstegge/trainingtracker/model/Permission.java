package de.rottstegge.trainingtracker.model;

import de.rottstegge.trainingtracker.model.base.AbstractBaseEntity;

import javax.persistence.*;

@Entity
@Table(name = "app_permission")
public class Permission extends AbstractBaseEntity {

    private String name;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Override
    public long getId() {
        return doGetId();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
