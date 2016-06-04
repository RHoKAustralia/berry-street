package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.voodoodyne.jackson.jsog.JSOGGenerator
import org.neo4j.ogm.annotation.GraphId
import org.neo4j.ogm.annotation.NodeEntity

@JsonIdentityInfo(generator=JSOGGenerator.class)
@NodeEntity
class Case {

    @GraphId Long id;


}