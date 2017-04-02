package au.org.berrystreet.familyfinder.api.domain

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.EndNode
import org.neo4j.ogm.annotation.RelationshipEntity
import org.neo4j.ogm.annotation.StartNode
import org.springframework.stereotype.Component

@ApiModel
@Component
@RelationshipEntity(type = 'FAMILY')
class Family extends Entity {

    @StartNode Person kin
    @EndNode Person person
    @ApiModelProperty String relationship
    @ApiModelProperty String howFound
    @ApiModelProperty String howInfoConfirmed
    @ApiModelProperty String notes
    @ApiModelProperty String riskAlert

    Family() { }

    Family(Person kin, Person person, String relationship, String howFound, String howInfoConfirmed, String notes, String riskAlert) {
        this.kin = kin
        this.person = person
        this.relationship = relationship
        this.howFound = howFound
        this.howInfoConfirmed = howInfoConfirmed
        this.notes = notes
        this.riskAlert = riskAlert
        this.kin.family.add(this)
        this.person.family.add(this)
    }
}
