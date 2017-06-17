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

    @Autowired
    ConnectionRepository connectionRepository

    void create(Long fromId, Long toId, String relationship, String notes) {
        GraphNode from = graphNodeService.find(fromId) as GraphNode
        GraphNode to = graphNodeService.find(toId) as GraphNode
        Connection conn = new Connection(from, to, relationship, notes)
        connectionRepository.save(conn)
    }

    void update(Long connectionId, String relationship, String notes) {
        Connection conn = connectionRepository.findOne(connectionId)
        conn.setRelationship(relationship)
        conn.setNotes(notes)

        connectionRepository.save(conn)
    }

    void delete(Long connectionId) {
        connectionRepository.delete(connectionId)
    }

    List<Connection> getConnections(Long caseId) {
        (graphNodeService.find(caseId) as GraphNode).connections
    }

    @Override
    GraphRepository<Connection> getRepository() {
        return connectionRepository
    }
}
