package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Case
import org.springframework.data.neo4j.repository.GraphRepository

interface CaseRepository extends GraphRepository<Case> {
}
