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

    @JsonProperty @ApiModelProperty
    String givenNames = null

    @JsonProperty @ApiModelProperty
    String familyName = null

    @JsonProperty @ApiModelProperty
    String additionalNames = null

    @JsonProperty @ApiModelProperty
    String gender = null

    @JsonProperty @ApiModelProperty
    @JsonFormat(pattern = 'yyyy-MM-dd')
    String dateOfBirth = null

    @JsonProperty @ApiModelProperty
    String atsi = null

    @JsonProperty @ApiModelProperty
    String atsiLocation = null

    @JsonProperty @ApiModelProperty
    String imageUrl = null

    @JsonProperty @ApiModelProperty
    String contactInformation = null

    @Override
    String getDisplayName() {
        "$givenNames $familyName"
    }

}
