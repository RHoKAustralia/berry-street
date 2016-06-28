package au.org.berrystreet.familyfinder.api.model

import com.fasterxml.jackson.annotation.JsonProperty
import groovy.transform.Canonical
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
@Canonical
class Links {

    @ApiModelProperty
    @JsonProperty('self')
    String self = null

}

