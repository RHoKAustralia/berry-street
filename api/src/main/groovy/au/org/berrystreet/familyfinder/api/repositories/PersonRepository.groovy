package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Person
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository

/**
 * Created by ishepher on 2016-06-04.
 */
@RepositoryRestResource(collectionResourceRel = "person", path = "person")
interface PersonRepository extends GraphRepository<Person> {
}
