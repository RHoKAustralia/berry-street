package au.org.berrystreet.familyfinder.api.model

import com.fasterxml.jackson.annotation.JsonProperty
import groovy.transform.Canonical
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
@Canonical
class Person {

    @ApiModelProperty
    @JsonProperty('id')
    BigDecimal id = null

    @ApiModelProperty
    @JsonProperty('firstName')
    String firstName = null

    @ApiModelProperty
    @JsonProperty('lastName')
    String lastName = null

    @ApiModelProperty
    @JsonProperty('dateOfBirth')
    Date dateOfBirth = null

}

