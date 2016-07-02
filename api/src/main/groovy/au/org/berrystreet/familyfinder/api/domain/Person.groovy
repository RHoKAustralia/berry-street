package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity

@NodeEntity(label='Person')
@JsonIgnoreProperties(value=['@id', 'metaClass'],ignoreUnknown=true)
class Person extends Entity {

    @ApiModelProperty
    @JsonProperty('firstName')
    String firstName = null

    @ApiModelProperty
    @JsonProperty('lastName')
    String lastName = null

    @ApiModelProperty
    @JsonProperty('dateOfBirth')
    @JsonFormat(pattern='yyyy-MM-dd')
    Date dateOfBirth = null
}
