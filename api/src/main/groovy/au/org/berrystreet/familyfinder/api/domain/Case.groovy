package au.org.berrystreet.familyfinder.api.domain

import org.hibernate.validator.constraints.NotEmpty
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity
// http://neo4j.com/docs/ogm-manual/current/#_nodes
class Case extends GraphEntity {

    String staffName

    // http://neo4j.com/docs/ogm-manual/current/#_relationships
    @Relationship(type = "SUBJECT", direction = Relationship.OUTGOING)
    @NotEmpty
    List<Person> subjects;

//    @EnumString
    String status // TODO enum
//    @DateLong
    Date dateOpened // TODO date
    String caseObjective
}
