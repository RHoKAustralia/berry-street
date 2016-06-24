package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Person
import org.springframework.data.neo4j.annotation.Query
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.data.rest.core.annotation.RestResource

@SuppressWarnings("GroovyUnusedDeclaration") // Autogens the /persons CRUD operations
@RepositoryRestResource //(collectionResourceRel = "people", path = "people")
interface PersonRepository extends GraphRepository<Person> {  // PagingAndSortingRepository<Person, Long>

    // http://docs.spring.io/spring-data/rest/docs/current/reference/html/#_paging
    @RestResource(path = "nameContains", rel = "nameContains")
    @Query("MATCH (p:Person) WHERE p.name =~ ('(?i).*'+{name}+'.*') RETURN p")
    Collection<Person> findByName(@Param("name") String name);

}
