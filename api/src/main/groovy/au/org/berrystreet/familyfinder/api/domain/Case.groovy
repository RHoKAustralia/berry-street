package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import io.swagger.annotations.ApiModelProperty
import org.neo4j.ogm.annotation.NodeEntity

@NodeEntity(label='Case')
@JsonIgnoreProperties(value=['@id', 'metaClass'],ignoreUnknown=true)
class Case extends Entity {

    @ApiModelProperty
    @JsonProperty('staffName')
    String staffName = null

    @ApiModelProperty
    @JsonProperty('status')
    String status = null

    @ApiModelProperty
    @JsonProperty('dateOpened')
    @JsonFormat(pattern='yyyy-MM-dd')
    Date dateOpened = null

    @ApiModelProperty
    @JsonProperty('caseObjective')
    String caseObjective = null

    @ApiModelProperty
    @JsonProperty('subjects')
    Person[] subjects = []
}
