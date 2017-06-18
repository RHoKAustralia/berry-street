package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.repositories.CaseRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.data.neo4j.repository.GraphRepository

@Service
class CaseService extends GenericService<Case> {

    @Autowired
    private CaseRepository repository

    @Override
    GraphRepository<Case> getRepository() {
      repository
    }

}
