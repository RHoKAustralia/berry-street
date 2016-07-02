package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.repositories.PersonRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.data.neo4j.repository.GraphRepository

@Service
class PersonService extends GenericService<Person> {

    @Autowired
    private PersonRepository repository

    @Override
    GraphRepository<Person> getRepository() { repository }
}
