package au.org.berrystreet.familyfinder.api.model

import com.fasterxml.jackson.annotation.JsonProperty
import groovy.transform.Canonical
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
@Canonical
class Persons {

    @ApiModelProperty
    @JsonProperty('data')
    Person[] data = []

    @ApiModelProperty
    @JsonProperty('links')
    Links links = null

}

