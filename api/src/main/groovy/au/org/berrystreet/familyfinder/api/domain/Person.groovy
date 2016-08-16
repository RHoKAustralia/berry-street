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
    String name = null

    @ApiModelProperty
    @JsonProperty('dateOfBirth')
    @JsonFormat(pattern='yyyy-MM-dd')
    String dateOfBirth = null

    @ApiModelProperty
    @JsonProperty('family')
    @Relationship(type = 'FAMILY')
    List<Family> family = []

    @ApiModelProperty
    @JsonProperty('friends')
    @Relationship(type = 'FRIEND')
    List<Friend> friends = []

}
