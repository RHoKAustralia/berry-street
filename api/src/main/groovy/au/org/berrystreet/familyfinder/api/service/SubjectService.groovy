package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Subject
import au.org.berrystreet.familyfinder.api.repositories.SubjectRepository
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class SubjectService extends GenericService<Subject> {

    @Autowired
    SubjectRepository repository

    @Override
    GraphRepository<Subject> getRepository() { return repository }
}
