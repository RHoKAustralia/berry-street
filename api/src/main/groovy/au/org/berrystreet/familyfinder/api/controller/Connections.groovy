package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Connection
import au.org.berrystreet.familyfinder.api.service.ConnectionService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON
import static org.springframework.web.bind.annotation.RequestMethod.DELETE
import static org.springframework.web.bind.annotation.RequestMethod.GET
import static org.springframework.web.bind.annotation.RequestMethod.PATCH
import static org.springframework.web.bind.annotation.RequestMethod.POST
import static org.springframework.web.bind.annotation.RequestMethod.PUT

@RestController
@RequestMapping(value = '/cases/{caseId}/connections', produces = [APPLICATION_JSON])
@Api(value = '/cases/{caseId}/connections', description = 'the connections API')
@CrossOrigin(origins = '*')
class Connections {

    @Autowired
    ConnectionService connectionService

    @ApiOperation(value = '', notes = 'Gets connections of `Case` identified with `caseId`', response = List)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Connection)])
    @RequestMapping(method = GET)
    List<Connection> listConnections(
        @ApiParam(value = 'ID of case to fetch', required = true) @PathVariable('caseId') Long caseId
    ) {
        connectionService.getConnections(caseId)
    }

    @ApiOperation(value = '', notes = 'Create connection')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(method = POST)
    void createConnection(
        @ApiParam(value = 'from', required = true) @RequestParam('fromId') Long fromId,
        @ApiParam(value = 'to', required = true) @RequestParam('toId') Long toId,
        @ApiParam(value = 'type', required = true) @RequestParam('type') String type,
        @ApiParam(value = 'notes', required = false) @RequestParam('notes') String notes
    ) {
        connectionService.create(fromId, toId, type, notes)
    }

    @ApiOperation(value = '/{connectionId}', notes = 'Gets connection with `connectionId`', response = Connection)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Connection)])
    @RequestMapping(method = GET, value = '/{connectionId}')
    Connection getConnection(
        @ApiParam(value = 'ID of connection to fetch', required = true) @PathVariable('connectionId') Long connectionId
    ) {
        connectionService.find(connectionId)
    }

    @ApiOperation(value = '/{connectionId}', notes = 'Update connection')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(method = PATCH, value= '/{connectionId}')
    void updateConnection(
        @ApiParam(value = 'ID of connection to fetch', required = true) @PathVariable('connectionId') Long connectionId,
        @ApiParam(value = 'relationship', required = true) @RequestParam('relationship') String relationship,
        @ApiParam(value = 'notes', required = false) @RequestParam('notes') String notes
    ) {
        connectionService.update(connectionId, relationship, notes)
    }

    @ApiOperation(value = '/{connectionId}', notes = 'Delete connection')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Connection)])
    @RequestMapping(method = DELETE, value= '/{connectionId}')
    void updateConnection(
        @ApiParam(value = 'ID of connection to fetch', required = true) @PathVariable('connectionId') Long connectionId
    ) {
        connectionService.delete(connectionId)
    }

}
