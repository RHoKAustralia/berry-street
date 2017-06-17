package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.domain.Subject
import au.org.berrystreet.familyfinder.api.service.CaseService
import au.org.berrystreet.familyfinder.api.service.PersonService
import au.org.berrystreet.familyfinder.api.service.SubjectService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import java.text.SimpleDateFormat

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON
import static org.springframework.web.bind.annotation.RequestMethod.GET
import static org.springframework.web.bind.annotation.RequestMethod.POST
import static org.springframework.web.bind.annotation.RequestMethod.PUT

@RestController
@RequestMapping(value = '/cases', produces = [APPLICATION_JSON])
@Api(value = '/cases', description = 'the case API')
@CrossOrigin(origins='*')
class Cases {

    @Autowired
    CaseService caseService

    @Autowired
    PersonService personService

    @Autowired
    SubjectService subjectService

    @ApiOperation(value = '', notes = 'list all `Case`s')
    @ApiResponses(value = [
        @ApiResponse(code = 200, message = 'Successful Response', response = Case, responseContainer = 'List')
    ])
    @RequestMapping(method = GET, value = '')
    Iterable<Case> list() {
        caseService.findAll()
    }

    @ApiOperation(value = '', notes = 'Creates a `Case`', response = Case)
    @ApiResponses(value = [
        @ApiResponse(code = 405, message = 'Invalid input', response = Void)
    ])
    @RequestMapping(method = POST, value = '', consumes = [APPLICATION_JSON])
    Case create(
        @ApiParam(value = 'A JSON string containing `Case` details', required = true) @RequestBody Case body
    ) {
        caseService.create(body)
    }

    @ApiOperation(value = '', notes = 'Gets `Case` identified with `id`', response = Case)
    @ApiResponses(value = [
        @ApiResponse(code = 200, message = 'Successful Response', response = Case)
    ])
    @RequestMapping(method = GET, value = '/{id}')
    Case find(@ApiParam(value = 'ID of `Case` to retrieve', required = true) @PathVariable('id') Long id) {
        caseService.find(id)
    }

    @ApiOperation(value = '', notes = 'Update the `Case` ', response = Void)
    @ApiResponses(value = [
        @ApiResponse(code = 200, message = 'Successfully updated `Case`', response = Case),
        @ApiResponse(code = 404, message = 'Could not find `Case`', response = Void)
    ])
    @RequestMapping(method = PUT, value = '/{id}', consumes = [APPLICATION_JSON])
    Case update(
        @ApiParam(value = 'ID of `Case` to update', required = true) @PathVariable('id') Long id,
        @ApiParam(value = 'A JSON string containing `Case` details', required = true) @RequestBody Case body
    ) {
        caseService.update(id, body)
    }

}
