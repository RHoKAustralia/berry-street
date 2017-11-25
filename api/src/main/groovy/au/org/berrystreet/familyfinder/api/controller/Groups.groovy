package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Group
import au.org.berrystreet.familyfinder.api.service.GroupService
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
import static org.springframework.web.bind.annotation.RequestMethod.PATCH

@RestController
@RequestMapping(value = '/cases/{caseId}/groups', produces = [APPLICATION_JSON])
@Api(value = '/cases/{caseId}/groups', description = 'the groups API')
@CrossOrigin(origins = '*')
class Groups {

    @Autowired
    GroupService groupService

    @ApiOperation(value = '', notes = 'List `Group`s for `Case` (by `caseId`)')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(method = GET, value = '')
    Iterable<Group> list(
        @ApiParam(value = 'ID of `Case` to list from', required = true) @PathVariable('caseId') Long caseId
    ) {
        groupService.findAll(caseId)
    }

    @ApiOperation(value = '', notes = 'Create a new `Group` in this `Case`', response = Group)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Group)])
    @RequestMapping(method = POST, value = '', consumes = [APPLICATION_JSON])
    Group create(
        @ApiParam(value = 'ID of `Case` to create in', required = true) @PathVariable('caseId') Long caseId,
        @ApiParam(value = '`Group` object to create', required = true) @RequestBody Group body
    ) {
        groupService.create(caseId, body)
    }

    @ApiOperation(value = '', notes = 'Get `Group` by `id` from this `Case`', response = Group)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Group)])
    @RequestMapping(method = GET, value = '/{id}')
    Group find(
        @ApiParam(value = 'ID of `Case` to fetch from', required = true) @PathVariable('caseId') Long caseId,
        @ApiParam(value = 'ID of `Group` to fetch', required = true) @PathVariable('id') Long id
    ) {
        groupService.find(caseId, id)
    }

    @ApiOperation(value = '', notes = 'Update `Group` by `id` in this `Case`', response = Group)
    @ApiResponses(value = [
        @ApiResponse(code = 404, message = '`Group` not found', response = Group),
        @ApiResponse(code = 405, message = 'Invalid input', response = Group)
    ])
    @RequestMapping(method = PATCH, value = '/{id}', consumes = [APPLICATION_JSON])
    Group update(
        @ApiParam(value = 'ID of `Case` to update in', required = true) @PathVariable('caseId') Long caseId,
        @ApiParam(value = 'ID of `Group` to update', required = true) @PathVariable('id') Long id,
        @ApiParam(value = '`Group` fields to update', required = true) @RequestBody Group body
    ) {
        groupService.update(caseId, id, body)
    }

}
