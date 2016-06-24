package au.org.berrystreet.familyfinder.api.domain

import org.hibernate.validator.constraints.NotBlank
import org.neo4j.ogm.annotation.GraphId
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity
class Person {
    // Use subclassing - http://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#reference_programming-model_typerepresentationstrategy
    // gives a label eg: Child:Person

    // https://neo4j.com/docs/ogm-manual/current/#__graphid
    @GraphId
    Long id;

    @NotBlank
    String name

    // TODO This only models the relationship's existence. We'll need a @RelationshipEntity class.
    @Relationship(type = "HAS_MOTHER", direction = Relationship.OUTGOING)
    Person mother;

    @Relationship(type = "HAS_FATHER", direction = Relationship.OUTGOING)
    Person father;
}
