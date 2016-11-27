package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@ApiModel(value='Person')
@NodeEntity(label='Person')
class Person extends Entity {

    @ApiModelProperty
    @JsonProperty('name')
    /** @Deprecated Temp compatibility - Remove this */
    String name = null

    @ApiModelProperty
    @JsonProperty
    String givenNames = null

    @ApiModelProperty
    @JsonProperty
    String familyName = null

    @ApiModelProperty
    @JsonProperty
    String clientNumber = null

    @ApiModelProperty
    @JsonProperty
    String aliases = null

    @ApiModelProperty
    @JsonProperty('dateOfBirth')
    @JsonFormat(pattern='yyyy-MM-dd')
    String dateOfBirth = null

    @ApiModelProperty
    @JsonProperty
    Boolean atsi = null

    @ApiModelProperty
    @JsonProperty
    String atsiLocation = null

    @ApiModelProperty
    @JsonProperty
    String image = null

    @ApiModelProperty
    @JsonProperty('family')
    @Relationship(type = 'FAMILY', direction = Relationship.UNDIRECTED)
    List<Family> family = []

    @ApiModelProperty
    @JsonProperty('friends')
    @Relationship(type = 'FRIEND', direction = Relationship.UNDIRECTED)
    List<Friend> friends = []
}
