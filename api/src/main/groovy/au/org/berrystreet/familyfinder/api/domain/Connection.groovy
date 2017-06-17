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
    String relationship
    @ApiModelProperty
    String notes

    Connection() {}

    Connection(GraphNode from, GraphNode to, String relationship, String notes) {
        this.from = from
        this.to = to
        this.relationship = relationship
        this.notes = notes

        this.from.connections.add(this)
        this.to.connections.add(this)
    }
}