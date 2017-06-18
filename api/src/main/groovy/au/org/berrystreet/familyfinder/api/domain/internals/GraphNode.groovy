package au.org.berrystreet.familyfinder.api.domain.internals

import au.org.berrystreet.familyfinder.api.domain.Connection
import com.fasterxml.jackson.annotation.JsonIgnore
import io.swagger.annotations.ApiModel
import org.neo4j.ogm.annotation.Relationship

@ApiModel
abstract class GraphNode extends GraphItem {

    @JsonIgnore
    @Relationship(type = 'CONNECTION', direction = Relationship.UNDIRECTED)
    List<Connection> connections = []

    abstract String getDisplayName()

}
