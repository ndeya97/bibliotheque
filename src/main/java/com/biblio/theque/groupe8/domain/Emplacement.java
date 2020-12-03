package com.biblio.theque.groupe8.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Emplacement.
 */
@Entity
@Table(name = "emplacement")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Emplacement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Size(max = 45)
    @Column(name = "nomemplacement", length = 45, unique = true)
    private String nomemplacement;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomemplacement() {
        return nomemplacement;
    }

    public Emplacement nomemplacement(String nomemplacement) {
        this.nomemplacement = nomemplacement;
        return this;
    }

    public void setNomemplacement(String nomemplacement) {
        this.nomemplacement = nomemplacement;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Emplacement)) {
            return false;
        }
        return id != null && id.equals(((Emplacement) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Emplacement{" +
            "id=" + getId() +
            ", nomemplacement='" + getNomemplacement() + "'" +
            "}";
    }
}
