package au.org.berrystreet.familyfinder.api.domain

import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

import static org.neo4j.ogm.annotation.Relationship.INCOMING

@ApiModel(value = 'Case')
@NodeEntity(label = 'Case')
class Case extends GraphNode {

    @JsonProperty @ApiModelProperty
    @Relationship(type = 'SUBJECT', direction = INCOMING)
    Person subject

    @JsonProperty @ApiModelProperty
    String familyFinderStaffName = null

    @JsonProperty @ApiModelProperty
    String caseManager = null

    @JsonProperty @ApiModelProperty
    String status = null

    @JsonProperty @ApiModelProperty
    @JsonFormat(pattern = 'yyyy-MM-dd')
    String dateOpened = null

    @JsonProperty @ApiModelProperty
    @JsonFormat(pattern = 'yyyy-MM-dd')
    String dateClosed = null

    @Override
    String getDisplayName() {
        "Case for: ${subject?.displayName ?: ''}"
    }

}
