package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.voodoodyne.jackson.jsog.JSOGGenerator
import org.neo4j.ogm.annotation.GraphId
import org.neo4j.ogm.annotation.NodeEntity

//@JsonIdentityInfo(generator=JSOGGenerator.class)
@NodeEntity
class Person {
    // Use subclassing - http://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#reference_programming-model_typerepresentationstrategy
    // gives a label eg: Child:Person

    @GraphId Long id

    String name
//    private int born
//
//    @Relationship(type = 'ACTED_IN')
//    private List<Movie> movies
}
