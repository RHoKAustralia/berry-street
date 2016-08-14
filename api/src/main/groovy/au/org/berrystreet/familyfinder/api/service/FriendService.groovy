package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Friend
import au.org.berrystreet.familyfinder.api.repositories.FriendRepository
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class FriendService extends GenericService<Friend> {

    @Autowired
    private FriendRepository repository

    @Override
    GraphRepository<Friend> getRepository() { return repository }
}
