package au.org.berrystreet.familyfinder.api.domain

import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity

@ApiModel(value = 'Group')
@NodeEntity(label = 'Group')
class Group extends GraphNode {

    @JsonProperty @ApiModelProperty
    String name;

    @Override
    String getDisplayName() {
        name
    }

}
