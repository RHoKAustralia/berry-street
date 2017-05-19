package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@ApiModel(value='Person')
@NodeEntity(label='Person')
class Person extends Entity {


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
    @JsonProperty
    String nickname = null

    @ApiModelProperty
    @JsonProperty
    String gender = null

    @ApiModelProperty
    @JsonProperty
    String bloodType = null

    @ApiModelProperty
    @JsonProperty
    String allergies = null

    @ApiModelProperty
    @JsonProperty
    String height = null

    @ApiModelProperty
    @JsonProperty
    String weight = null

    @ApiModelProperty
    @JsonProperty
    String school = null

    @ApiModelProperty
    @JsonProperty
    String clubsAttended = null

    @ApiModelProperty
    @JsonProperty
    String eyeColor = null

    @ApiModelProperty
    @JsonProperty
    String job = null

    @ApiModelProperty
    @JsonProperty
    String preferredLanguage = null

    @ApiModelProperty
    @JsonProperty
    String languagesSpoken = null

    @ApiModelProperty
    @JsonProperty
    String requiresTranslator = null

    @ApiModelProperty
    @JsonProperty
    String sourceId = null

    @ApiModelProperty
    @JsonProperty
    String sourceAgency = null

    @ApiModelProperty
    @JsonProperty
    String violence = null

    @ApiModelProperty
    @JsonProperty
    String removalFromCare = null

    @ApiModelProperty
    @JsonProperty('dateOfBirth')
    @JsonFormat(pattern='yyyy-MM-dd')
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
    String address = null

    @ApiModelProperty
    @JsonProperty
    String phone = null

    @ApiModelProperty
    @JsonProperty
    String email = null

    @JsonIgnore
    @Relationship(type = 'FAMILY', direction = Relationship.UNDIRECTED)
    List<Family> family = []

    @JsonIgnore
    @Relationship(type = 'FRIEND', direction = Relationship.UNDIRECTED)
    List<Friend> friends = []
}
