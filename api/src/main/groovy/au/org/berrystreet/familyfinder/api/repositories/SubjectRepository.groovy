package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Subject
import org.springframework.data.neo4j.repository.GraphRepository

interface SubjectRepository extends GraphRepository<Subject> {
}
