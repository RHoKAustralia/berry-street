package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.voodoodyne.jackson.jsog.JSOGGenerator
import org.neo4j.ogm.annotation.GraphId
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@JsonIdentityInfo(generator=JSOGGenerator)
@NodeEntity
class Person {

    @GraphId Long id
    String name
//    private int born
//
//    @Relationship(type = 'ACTED_IN')
//    private List<Movie> movies
}
