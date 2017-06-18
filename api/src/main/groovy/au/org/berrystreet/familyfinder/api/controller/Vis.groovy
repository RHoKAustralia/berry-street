package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.VisService
import au.org.berrystreet.familyfinder.api.dto.vis.VisDto
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import static org.springframework.web.bind.annotation.RequestMethod.GET


@RestController
@RequestMapping(value = '/cases/{caseId}/vis',   produces = [MediaType.APPLICATION_JSON_VALUE] )
@Api(value = '/cases/{caseId}/connections', description = 'the connections API')
@CrossOrigin(origins = '*')
class Vis {


    @Autowired
    private VisService visService

    @ApiOperation(value = '', notes = 'Gets vis graph of case with `caseId`', response = VisDto)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = VisDto)])
    @RequestMapping(method = GET)
    VisDto getVisDto(
        @ApiParam(value = 'ID of case to fetch', required = true) @PathVariable('caseId') Long caseId) {
        visService.getVis(caseId)
    }

}
