package com.biblio.theque.groupe8.repository;

import com.biblio.theque.groupe8.domain.Emplacement;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Emplacement entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmplacementRepository extends JpaRepository<Emplacement, Long> {
}
