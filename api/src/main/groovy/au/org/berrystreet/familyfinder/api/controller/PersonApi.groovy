package au.org.berrystreet.familyfinder.api.controller

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

import au.org.berrystreet.familyfinder.api.controller.exception.NotFoundException
import au.org.berrystreet.familyfinder.api.model.Person
import au.org.berrystreet.familyfinder.api.model.Persons

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam

@Controller
@RequestMapping(value = '/person', produces = [APPLICATION_JSON_VALUE])
@Api(value = '/person', description = 'the person API')
class PersonApi {

  @ApiOperation(value = '', notes = 'Creates a new `Person` ', response = Void)
  @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Void)])
  @RequestMapping(value = '',
    produces = ['application/vnd.api+json'], consumes = ['application/vnd.api+json'], method = RequestMethod.POST)
  ResponseEntity<Void> personPost(
          @ApiParam(value = '`Person` object to create ' ,required=true ) @RequestBody
                  Person body
  )throws NotFoundException {
      // do some magic!
      return new ResponseEntity<Void>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'Updates an existing `Person` ', response = Void)
  @ApiResponses(value = [
    @ApiResponse(code = 404, message = '`Person` not found ', response = Void),
    @ApiResponse(code = 405, message = 'Invalid input', response = Void)])
  @RequestMapping(value = '',
    produces = ['application/vnd.api+json'], consumes = ['application/vnd.api+json'], method = RequestMethod.PUT)
  ResponseEntity<Void> personPut(
          @ApiParam(value = '`Person` object to update ' ,required=true ) @RequestBody
                  Person body
  ) throws NotFoundException {
      // do some magic!
      return new ResponseEntity<Void>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'search for `Person`s that match the criteria provided', response = Persons)
  @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Persons)])
  @RequestMapping(value = '/search', produces = ['application/vnd.api+json'], method = RequestMethod.GET)
  ResponseEntity<Persons> personSearchGet(
          @ApiParam(value = 'first name') @RequestParam(value = 'firstName', required = false) 
                  String firstName, 
          @ApiParam(value = 'last name') @RequestParam(value = 'lastName', required = false) 
                  String lastName, 
          @ApiParam(value = 'fragment of the name') @RequestParam(value = 'dateOfBirth', required = false) 
                  Date dateOfBirth
  ) throws NotFoundException {
      // do some magic!
      return new ResponseEntity<Persons>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'Gets `Person` identified with `id` ', response = Persons)
  @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Persons)])
  @RequestMapping(value = '/${id}', produces = ['application/vnd.api+json'], method = RequestMethod.GET)
  ResponseEntity<Persons> personidGet(
          @ApiParam(value = 'ID of person to fetch',required=true ) @PathVariable('id')
                  Long id
  ) throws NotFoundException {
      // do some magic!
      return new ResponseEntity<Persons>(HttpStatus.OK)
  }

}
