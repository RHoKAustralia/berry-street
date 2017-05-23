package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Connection
import au.org.berrystreet.familyfinder.api.repositories.ConnectionRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.stereotype.Service

@Service
class ConnectionService extends GenericService<Connection> {

    @Autowired
    private ConnectionRepository repository

    @Override
    GraphRepository<Connection> getRepository() { repository }
}
