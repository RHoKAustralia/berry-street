package au.org.berrystreet.familyfinder.api.domain

import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.EndNode
import org.neo4j.ogm.annotation.RelationshipEntity
import org.neo4j.ogm.annotation.StartNode
import org.springframework.stereotype.Component

@ApiModel
@Component
@RelationshipEntity(type = 'FRIEND')
class Friend extends Entity {

    @StartNode Person kith
    @EndNode Person person
    @ApiModelProperty String relationship
    @ApiModelProperty String howFound
    @ApiModelProperty String howInfoConfirmed
    @ApiModelProperty String notes
    @ApiModelProperty String riskAlert

    Friend() {}

    Friend(Person kith, Person person, String relationship, String howFound, String howInfoConfirmed, String notes, String riskAlert) {
        this.kith = kith
        this.person = person
        this.relationship = relationship
        this.howFound = howFound
        this.howInfoConfirmed = howInfoConfirmed
        this.notes = notes
        this.riskAlert = riskAlert
        this.kith.friends.add(this)
        this.person.friends.add(this)
    }
}
