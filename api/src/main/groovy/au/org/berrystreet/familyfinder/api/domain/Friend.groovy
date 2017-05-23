package au.org.berrystreet.familyfinder.api.domain

import org.neo4j.ogm.annotation.RelationshipEntity

@RelationshipEntity(type = 'FRIEND')
class Friend extends Relationship {
    Friend() {
        super()
    }

    Friend(Person to, Person from, String relationship, String howFound, String howInfoConfirmed, String notes, String riskAlert) {
        super(to, from, relationship, howFound, howInfoConfirmed, notes, riskAlert)
        this.from.friends.add(this)
        this.to.friends.add(this)
    }
}
