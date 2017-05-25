package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import org.springframework.data.neo4j.repository.GraphRepository

interface GraphNodeRepository extends GraphRepository<GraphNode> {
}
