package au.org.berrystreet.familyfinder.api.domain

import com.voodoodyne.jackson.jsog.JSOGGenerator
import com.fasterxml.jackson.annotation.JsonIdentityInfo
import io.swagger.annotations.ApiModel
import org.neo4j.ogm.annotation.GraphId

@ApiModel
@JsonIdentityInfo(generator=JSOGGenerator)
class Entity {
    @GraphId Long id
}