package au.org.berrystreet.familyfinder.api.model

import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

import groovy.transform.Canonical

@ApiModel
@Canonical
class Cases {

    @ApiModelProperty
    @JsonProperty('data')
    ModelCase[] data = []

    @ApiModelProperty
    @JsonProperty('links')
    Links links = null

}

