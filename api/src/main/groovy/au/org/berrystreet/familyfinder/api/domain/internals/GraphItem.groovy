package au.org.berrystreet.familyfinder.api.domain.internals

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.voodoodyne.jackson.jsog.JSOGGenerator
import io.swagger.annotations.ApiModel
import org.neo4j.ogm.annotation.GraphId

@ApiModel
@JsonIdentityInfo(generator = JSOGGenerator)
class GraphItem {

    @GraphId
    Long id

}
