package au.org.berrystreet.familyfinder.api.controller

import org.springframework.web.bind.annotation.RestController

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

import au.org.berrystreet.familyfinder.api.controller.exception.NotFoundException
import au.org.berrystreet.familyfinder.api.model.ModelCase
import au.org.berrystreet.familyfinder.api.model.Cases

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam

@RestController
@RequestMapping(value = '/case', produces = [APPLICATION_JSON_VALUE])
@Api(value = '/case', description = 'the case API')
class CaseApi {

  @ApiOperation(value = '', notes = 'Creates a `Case` ', response = Void)
  @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Void)])
  @RequestMapping(value = '',
    produces = ['application/vnd.api+json'], consumes = ['application/vnd.api+json'], method = RequestMethod.POST)
  ResponseEntity<Void> casePost(
          @ApiParam(value = 'A JSON string containing `Case` details' ,required=true ) @RequestBody
                  ModelCase body
) throws NotFoundException {
      // do some magic!
      new ResponseEntity<Void>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'Update the `Case` ', response = Void)
  @ApiResponses(value = [
    @ApiResponse(code = 200, message = 'Successfully updated `Case`', response = Void),
    @ApiResponse(code = 404, message = 'Could not find `Case`', response = Void)])
  @RequestMapping(value = '',
    produces = ['application/vnd.api+json'], consumes = ['application/vnd.api+json'], method = RequestMethod.PUT)
  ResponseEntity<Void> casePut(
          @ApiParam(value = 'A JSON string containing `Case` details' ,required=true ) @RequestBody
                  ModelCase body
)throws NotFoundException {
      // do some magic!
      new ResponseEntity<Void>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'list all `Case`s', response = Cases)
  @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful Response', response = Cases)])
  @RequestMapping(value = '/search',
    produces = ['application/vnd.api+json'],
    consumes = ['application/vnd.api+json'],
    method = RequestMethod.GET)
  ResponseEntity<Cases> caseSearchGet(
          @ApiParam(value = 'Maximum number of `Cases` to return') @RequestParam(value = 'size', required = false)
                  Integer size
  )throws NotFoundException {
      // do some magic!
      new ResponseEntity<Cases>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'list all `Case`s', response = Cases)
  @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful Response', response = Cases)])
  @RequestMapping(value = '/${id}', produces = ['application/vnd.api+json'], method = RequestMethod.GET)
  ResponseEntity<Cases> caseidGet(
          @ApiParam(value = 'ID of `Case` to retrieve',required=true ) @PathVariable('id')
                  Long id
  )throws NotFoundException {
      // do some magic!
      new ResponseEntity<Cases>(HttpStatus.OK)
  }

  @ApiOperation(value = '', notes = 'Link a `Person` to a `Case` ', response = Void)
  @ApiResponses(value = [
    @ApiResponse(code = 200, message = 'No change. `Person` already linked to `Case`', response = Void),
    @ApiResponse(code = 201, message = 'Successfully linked `Person` to `Case`', response = Void),
    @ApiResponse(code = 404, message = 'Could not find `Person` or `Case`', response = Void)
  ])
  @RequestMapping(value = '/${id}/person/${personId}',
    produces = ['application/vnd.api+json'],
    consumes = ['application/vnd.api+json'],
    method = RequestMethod.POST)
  ResponseEntity<Void> caseidPersonpersonIdPost(
          @ApiParam(value = 'ID of `Case` to update',required=true ) @PathVariable('id')
                  Long id,
          @ApiParam(value = 'ID of `Person` that should be linked to the `Case`',required=true) @PathVariable('personId')
                  Long personId
  ) throws NotFoundException {
      // do some magic!
      new ResponseEntity<Void>(HttpStatus.OK)
  }

}
