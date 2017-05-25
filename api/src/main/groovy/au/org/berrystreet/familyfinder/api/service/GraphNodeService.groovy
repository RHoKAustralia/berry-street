package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import au.org.berrystreet.familyfinder.api.repositories.GraphNodeRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.stereotype.Service

@Service
class GraphNodeService extends GenericService<GraphNode> {

    @Autowired
    private GraphNodeRepository repository

    @Override
    GraphRepository<GraphNode> getRepository() { repository }
}