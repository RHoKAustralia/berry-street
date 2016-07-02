package au.org.berrystreet.familyfinder.api.controller

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON_API_VALUE

import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.service.CaseService
import au.org.berrystreet.familyfinder.api.service.Service

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = '/case', produces = [APPLICATION_JSON_API_VALUE])
@Api(value = '/case', description = 'the case API')
class CaseController extends Controller<Case> {

    @Autowired
    CaseService service

    @ApiOperation(value = '', notes = 'Creates a `Case` ', response = Case)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Case)])
    @RequestMapping(
            value = '',
            consumes = [APPLICATION_JSON_API_VALUE],
            method = RequestMethod.POST)
    Case create(@ApiParam(value = 'A JSON string containing `Case` details', required = true) @RequestBody Case body) {
        super.create(body)
    }

    @ApiOperation(value = '', notes = 'Update the `Case` ', response = Void)
    @ApiResponses(value = [
            @ApiResponse(code = 200, message = 'Successfully updated `Case`', response = Void),
            @ApiResponse(code = 404, message = 'Could not find `Case`', response = Void)])
    @RequestMapping(
            value = '/${id}', 
            consumes = [APPLICATION_JSON_API_VALUE],
            method = RequestMethod.PUT)
    Case update(@ApiParam(value = 'ID of `Case` to retrieve', required = true) @PathVariable('id') Long id,
                @ApiParam(value = 'A JSON string containing `Case` details', required = true) @RequestBody Case body) {
        super.update(id, body)
    }

    @ApiOperation(value = '', notes = 'list all `Case`s')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful Response')])
    @RequestMapping(value = '',
            consumes = [APPLICATION_JSON_API_VALUE],
            method = RequestMethod.GET)
    Iterable<Case> list(
//            @ApiParam(value = 'Maximum number of `Cases` to return') @RequestParam(value = 'size', required = false)
//                    Integer size
    ) {
        super.list()
    }

    @ApiOperation(value = '', notes = 'list all `Case`s', response = Case)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful Response', response = Case)])
    @RequestMapping(
            value = '/${id}',
            method = RequestMethod.GET)
    Case find(@ApiParam(value = 'ID of `Case` to retrieve', required = true) @PathVariable('id') Long id) {
        super.find(id)
    }

    @Override
    Service<Case> getService() { service }
}
