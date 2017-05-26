package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.service.PersonService
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

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON
import static org.springframework.web.bind.annotation.RequestMethod.GET
import static org.springframework.web.bind.annotation.RequestMethod.POST
import static org.springframework.web.bind.annotation.RequestMethod.PUT

@RestController
@RequestMapping(value = '/people', produces = [APPLICATION_JSON])
@Api(value = '/people', description = 'the person API')
@CrossOrigin(origins='*')
class People {

    @Autowired
    PersonService personService

    @ApiOperation(value = '', notes = 'Creates a new `Person`', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Person)])
    @RequestMapping(
            value = '',
            consumes = [APPLICATION_JSON],
            method = POST)
    Person create( @ApiParam(value = '`Person` object to create', required = true) @RequestBody Person body) {
        personService.create(body)
    }

    @ApiOperation(value = '', notes = 'List all `Person`s that match the criteria provided')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(
            value = '',
            method = GET)
    Iterable<Person> list() {
        personService.findAll()
    }

    @ApiOperation(value = '', notes = 'Gets `Person` identified with `id`', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Person)])
    @RequestMapping(
            value = '/{id}',
            method = GET)
    Person find(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id) {
        personService.find(id)
    }

    @ApiOperation(value = '', notes = 'Updates an existing `Person`', response = Person)
    @ApiResponses(value = [
            @ApiResponse(code = 404, message = '`Person` not found', response = Person),
            @ApiResponse(code = 405, message = 'Invalid input', response = Person)])
    @RequestMapping(
            value = '/{id}',
            consumes = [APPLICATION_JSON],
            method = PUT)
    Person update(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id,
                  @ApiParam(value = '`Person` object to update', required = true) @RequestBody Person body) {
        personService.update(id, body)
    }

}
