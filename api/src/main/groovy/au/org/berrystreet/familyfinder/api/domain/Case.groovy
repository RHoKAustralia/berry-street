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

    @ApiModelProperty
    @JsonProperty('familyFinderStaffName')
    String familyFinderStaffName = null

    @ApiModelProperty
    @JsonProperty('caseManager')
    String caseManager = null

    @ApiModelProperty
    @JsonProperty('status')
    String status = null

    @ApiModelProperty
    @JsonProperty('dateOpened')
    @JsonFormat(pattern = 'yyyy-MM-dd')
    String dateOpened = null

    @ApiModelProperty
    @JsonProperty('dateClosed')
    @JsonFormat(pattern = 'yyyy-MM-dd')
    String dateClosed = null

    @ApiModelProperty
    @JsonProperty('caseObjective')
    String caseObjective = null

    @ApiModelProperty
    @JsonProperty('phaseOfInvolvement')
    String phaseOfInvolvement

    @ApiModelProperty
    @JsonProperty('subjects')
    @Relationship(type = 'SUBJECT', direction = INCOMING)
    List<Subject> subjects = []
}
