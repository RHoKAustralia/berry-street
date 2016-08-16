package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Family
import org.springframework.data.neo4j.repository.GraphRepository

interface FamilyRepository extends GraphRepository<Family> {
}
