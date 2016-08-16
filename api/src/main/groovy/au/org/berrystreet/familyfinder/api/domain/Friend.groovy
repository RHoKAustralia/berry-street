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

    Friend() {}

    Friend(Person kith, Person person, String relationship) {
        this.kith = kith
        this.person = person
        this.relationship = relationship
        this.kith.friends.add(this)
        this.person.friends.add(this)
    }
}
