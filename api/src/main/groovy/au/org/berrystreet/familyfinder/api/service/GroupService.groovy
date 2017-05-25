package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Group
import au.org.berrystreet.familyfinder.api.repositories.GroupRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.stereotype.Service

@Service
class GroupService extends GenericService<Group> {

    @Autowired
    private GroupRepository repository

    @Override
    GraphRepository<Group> getRepository() { repository }
}
