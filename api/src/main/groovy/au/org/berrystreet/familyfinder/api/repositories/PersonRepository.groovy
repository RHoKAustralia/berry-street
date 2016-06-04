package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Person
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource


/**
 * Created by ishepher on 2016-06-04.
 */
@RepositoryRestResource(collectionResourceRel = "person", path = "person")
interface PersonRepository extends PagingAndSortingRepository<Person, Long> { //GraphRepository<Person> {

    List<Person> findByName(@Param("name") String name);

}
