package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Connection
import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import au.org.berrystreet.familyfinder.api.repositories.ConnectionRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.stereotype.Service

@Service
class ConnectionService extends GenericService<Connection> {

    @Autowired
    GraphNodeService graphNodeService

    List<Connection> create(Long toId, Long fromId, String relationship, String notes) {
        GraphNode to = graphNodeService.find(toId) as GraphNode
        GraphNode from = graphNodeService.find(fromId) as GraphNode
        Connection conn = new Connection(to, from, relationship, notes)
        repository.save(conn)
        from.connections
    }

    List<Connection> getConnections(Long id) {
        (graphNodeService.find(id) as GraphNode).connections
    }

    @Autowired
    private ConnectionRepository repository

    @Override
    GraphRepository<Connection> getRepository() { repository }
}
