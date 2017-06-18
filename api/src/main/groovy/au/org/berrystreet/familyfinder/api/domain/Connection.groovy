package au.org.berrystreet.familyfinder.api.domain

import au.org.berrystreet.familyfinder.api.domain.internals.GraphItem
import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.EndNode
import org.neo4j.ogm.annotation.RelationshipEntity
import org.neo4j.ogm.annotation.StartNode
import org.springframework.stereotype.Component

@ApiModel
@Component
@RelationshipEntity(type = 'CONNECTION')
class Connection extends GraphItem {

    @StartNode
    GraphNode from

    @EndNode
    GraphNode to

    @ApiModelProperty
    String type

    @ApiModelProperty
    String notes

    static Connection connect(GraphNode from, GraphNode to, String type, String notes) {
        Connection c = new Connection(from: from, to: to, type: type, notes: notes)
        from.connections.add(c)
        to.connections.add(c)
        c
    }

}
