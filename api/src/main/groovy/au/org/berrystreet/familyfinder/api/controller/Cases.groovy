package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.domain.Subject
import au.org.berrystreet.familyfinder.api.service.PersonService
import au.org.berrystreet.familyfinder.api.service.SubjectService
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.CrossOrigin

import java.text.SimpleDateFormat

import static org.springframework.web.bind.annotation.RequestMethod.GET
import static org.springframework.web.bind.annotation.RequestMethod.POST
import static org.springframework.web.bind.annotation.RequestMethod.PUT

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON

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
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping(value = '/cases', produces = [APPLICATION_JSON])
@Api(value = '/cases', description = 'the case API')
class Cases extends Controller<Case> {

    @Autowired
    CaseService service

    @Autowired
    PersonService personService

    @Autowired
    SubjectService subjectService

    @ApiOperation(value = '', notes = 'Creates a `Case`', response = Case)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Void)])
    @RequestMapping(
            value = '',
            consumes = [APPLICATION_JSON],
            method = POST)
    Case create(@ApiParam(value = 'A JSON string containing `Case` details', required = true) @RequestBody Case body) {
        super.create(body)
    }

    @ApiOperation(value = '', notes = 'Update the `Case` ', response = Void)
    @ApiResponses(value = [
            @ApiResponse(code = 200, message = 'Successfully updated `Case`', response = Case),
            @ApiResponse(code = 404, message = 'Could not find `Case`', response = Void)])
    @RequestMapping(
            value = '/{id}',
            consumes = [APPLICATION_JSON],
            method = PUT)
    Case update(@ApiParam(value = 'ID of `Case` to retrieve', required = true) @PathVariable('id') Long id,
                @ApiParam(value = 'A JSON string containing `Case` details', required = true) @RequestBody Case body) {
        super.update(id, body)
    }

    @ApiOperation(value = '', notes = 'Update the `Case` ', response = Void)
    @ApiResponses(value = [
            @ApiResponse(code = 200, message = 'Successfully updated `Case`', response = Case),
            @ApiResponse(code = 404, message = 'Could not find `Case`', response = Void)])
    @RequestMapping(
            value = '/{id}/subject/{personId}',
            consumes = [APPLICATION_JSON],
            method = PUT)
    Case addSubject(@ApiParam(value = 'ID of `Case` to retrieve', required = true) @PathVariable('id') Long id,
                    @ApiParam(value = 'person', required = true) @PathVariable('personId') Long personId) {
        Person person = personService.find(personId)
        Case aCase = super.find(id) as Case
        Subject subject = new Subject(person, aCase, new SimpleDateFormat('yyyy-MM-dd').format(new Date()))
        subjectService.repository.save(subject)
        super.find(id)
    }

    @ApiOperation(value = '', notes = 'list all `Case`s')
    @ApiResponses(value = [
        @ApiResponse(code = 200, message = 'Successful Response', response = Case, responseContainer = 'List')])
    @RequestMapping(value = '',
            method = GET)
    @CrossOrigin(origins='*')
    Case[] list(
//            @ApiParam(value = 'depth') @RequestParam(value = 'depth', required = true) int depth
    ) {
        super.list(1) as Case[]
    }

    @ApiOperation(value = '', notes = 'list all `Case`s', response = Case)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful Response', response = Case)])
    @RequestMapping(
            value = '/{id}',
            method = GET)
    Case find(@ApiParam(value = 'ID of `Case` to retrieve', required = true) @PathVariable('id') Long id) {
        super.find(id)
    }

    @Override
    Service<Case> getService() { service }
}
