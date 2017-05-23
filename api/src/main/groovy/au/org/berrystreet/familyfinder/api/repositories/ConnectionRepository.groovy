package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Connection
import org.springframework.data.neo4j.repository.GraphRepository

interface ConnectionRepository extends GraphRepository<Connection> {
}
