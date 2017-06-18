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

    void create(Long fromId, Long toId, String type, String notes) {
        connectionRepository.save(
            Connection.connect(
              graphNodeService.find(fromId),
              graphNodeService.find(toId),
              type,
              notes
            )
        )
    }

    void update(Long connectionId, String type, String note) {
        Connection conn = connectionRepository.findOne(connectionId)
        conn.with {
            relationship = type
            notes = note
        }
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
        connectionRepository
    }
}
