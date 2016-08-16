package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Person
import org.springframework.data.neo4j.repository.GraphRepository

interface PersonRepository extends GraphRepository<Person> {
}
