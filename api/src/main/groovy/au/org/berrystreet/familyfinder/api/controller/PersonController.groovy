package au.org.berrystreet.familyfinder.api.controller

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON_API_VALUE

import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.service.PersonService
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
@RequestMapping(value = '/person', produces = [APPLICATION_JSON_API_VALUE])
@Api(value = '/person', description = 'the person API')
class PersonController extends Controller<Person> {

    @Autowired
    PersonService service

    @ApiOperation(value = '', notes = 'Creates a new `Person` ', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Person)])
    @RequestMapping(
            value = '',
            consumes = [APPLICATION_JSON_API_VALUE],
            method = RequestMethod.POST)
    Person create( @ApiParam(value = '`Person` object to create ', required = true) @RequestBody Person body) {
        super.create(body)
    }

    @ApiOperation(value = '', notes = 'search for `Person`s that match the criteria provided')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(
            value = '',
            method = RequestMethod.GET)
    Iterable<Person> list(
//            @ApiParam(value = 'first name') @RequestParam(value = 'firstName', required = false) String firstName,
//            @ApiParam(value = 'last name') @RequestParam(value = 'lastName', required = false) String lastName,
//            @ApiParam(value = 'DOB') @RequestParam(value = 'dateOfBirth', required = false) Date dateOfBirth
    ) {
        super.list()
    }

    @ApiOperation(value = '', notes = 'Gets `Person` identified with `id` ', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Person)])
    @RequestMapping(
            value = '/{id}',
            method = RequestMethod.GET)
    Person find(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id) {
        super.find(id)
    }

    @ApiOperation(value = '', notes = 'Updates an existing `Person` ', response = Person)
    @ApiResponses(value = [
            @ApiResponse(code = 404, message = '`Person` not found ', response = Person),
            @ApiResponse(code = 405, message = 'Invalid input', response = Person)])
    @RequestMapping(
            value = '/{id}',
            consumes = [APPLICATION_JSON_API_VALUE],
            method = RequestMethod.PUT)
    Person update(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id,
                  @ApiParam(value = '`Person` object to update ', required = true) @RequestBody Person body) {
        super.update(id, body)
    }

    @Override
    Service<Person> getService() { service }
}
