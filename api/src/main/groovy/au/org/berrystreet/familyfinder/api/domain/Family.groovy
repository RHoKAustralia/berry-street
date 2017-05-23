package au.org.berrystreet.familyfinder.api.domain

import org.neo4j.ogm.annotation.RelationshipEntity

@RelationshipEntity(type = 'FAMILY')
class Family extends Relationship {
    Family() {
        super()
    }

    Family(Person to, Person from, String relationship, String howFound, String howInfoConfirmed, String notes, String riskAlert) {
        super(to, from, relationship, howFound, howInfoConfirmed, notes, riskAlert)
        this.from.family.add(this)
        this.to.family.add(this)
    }
}
