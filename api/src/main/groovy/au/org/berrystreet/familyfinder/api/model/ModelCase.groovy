package au.org.berrystreet.familyfinder.api.model

import com.fasterxml.jackson.annotation.JsonProperty
import groovy.transform.Canonical
import io.swagger.annotations.ApiModel
import io.swagger.annotations.ApiModelProperty

@ApiModel
@Canonical
class ModelCase {

    @ApiModelProperty
    @JsonProperty('staffName')
    String staffName = null

    @ApiModelProperty
    @JsonProperty('status')
    String status = null

    @ApiModelProperty
    @JsonProperty('dateOpened')
    Date dateOpened = null

    @ApiModelProperty
    @JsonProperty('caseObjective')
    String caseObjective = null

    @ApiModelProperty
    @JsonProperty('subjects')
    Person[] subjects = []

    @ApiModelProperty
    @JsonProperty('links')
    Links links = null
  

}

