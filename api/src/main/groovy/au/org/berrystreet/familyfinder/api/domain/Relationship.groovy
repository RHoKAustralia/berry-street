package au.org.berrystreet.familyfinder.api.domain

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.EndNode
import org.neo4j.ogm.annotation.StartNode
import org.springframework.stereotype.Component

@ApiModel
@Component
class Relationship extends Entity {
    @StartNode
    Person from
    @EndNode
    Person to
    @ApiModelProperty
    String relationship
    @ApiModelProperty
    String howFound
    @ApiModelProperty
    String howInfoConfirmed
    @ApiModelProperty
    String notes
    @ApiModelProperty
    String riskAlert

    Relationship() {}

    Relationship(Person to, Person from, String relationship, String howFound, String howInfoConfirmed, String notes, String riskAlert) {
        this.from = from
        this.to = to
        this.relationship = relationship
        this.howFound = howFound
        this.howInfoConfirmed = howInfoConfirmed
        this.notes = notes
        this.riskAlert = riskAlert
    }
}