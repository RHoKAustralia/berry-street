package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Family
import au.org.berrystreet.familyfinder.api.repositories.FamilyRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.data.neo4j.repository.GraphRepository

@Service
class FamilyService extends GenericService<Family> {

    @Autowired
    private FamilyRepository repository

    @Override
    GraphRepository<Family> getRepository() { repository }
}
