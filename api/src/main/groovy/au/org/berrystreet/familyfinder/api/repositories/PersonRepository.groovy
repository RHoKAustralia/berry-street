package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Person
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@SuppressWarnings("GroovyUnusedDeclaration") // Autogens the /persons CRUD operations
@RepositoryRestResource //(collectionResourceRel = "people", path = "people")
interface PersonRepository extends GraphRepository<Person> {  // PagingAndSortingRepository<Person, Long>

}
