package au.org.berrystreet.familyfinder.api.domain

import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity

@ApiModel(value = 'Person')
@NodeEntity(label = 'Person')
class Person extends GraphNode {

    @ApiModelProperty
    @JsonProperty
    String givenNames = null

    @ApiModelProperty
    @JsonProperty
    String familyName = null

    @ApiModelProperty
    @JsonProperty
    String additionalNames = null

    @ApiModelProperty
    @JsonProperty
    String gender = null

    @ApiModelProperty
    @JsonProperty('dateOfBirth')
    @JsonFormat(pattern = 'yyyy-MM-dd')
    String dateOfBirth = null

    @ApiModelProperty
    @JsonProperty
    String atsi = null

    @ApiModelProperty
    @JsonProperty
    String atsiLocation = null

    @ApiModelProperty
    @JsonProperty
    String image = null

    @ApiModelProperty
    @JsonProperty
    String contactInformation = null

}
