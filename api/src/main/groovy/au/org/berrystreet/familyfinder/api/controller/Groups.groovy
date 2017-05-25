package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Group
import au.org.berrystreet.familyfinder.api.service.GroupService
import au.org.berrystreet.familyfinder.api.service.Service
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
@RequestMapping(value = '/groups', produces = [APPLICATION_JSON])
@Api(value = '/groups', description = 'the groups API')
@CrossOrigin(origins = '*')
class Groups extends Controller<Group> {

    @Autowired
    GroupService service

    @ApiOperation(value = '', notes = 'Creates a new `Group`', response = Group)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Group)])
    @RequestMapping(
            value = '',
            consumes = [APPLICATION_JSON],
            method = POST)
    Group create(@ApiParam(value = '`Group` object to create', required = true) @RequestBody Group body) {
        super.create(body)
    }

    @ApiOperation(value = '', notes = 'List all `Group`s')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(
            value = '',
            method = GET)
    Group[] list() {
        super.list() as Group[]
    }

    @ApiOperation(value = '', notes = 'Gets `Group` identified with `id`', response = Group)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Group)])
    @RequestMapping(
            value = '/{id}',
            method = GET)
    Group find(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id) {
        super.find(id)
    }

    @ApiOperation(value = '', notes = 'Updates an existing `Group`', response = Group)
    @ApiResponses(value = [
            @ApiResponse(code = 404, message = '`Group` not found', response = Group),
            @ApiResponse(code = 405, message = 'Invalid input', response = Group)])
    @RequestMapping(
            value = '/{id}',
            consumes = [APPLICATION_JSON],
            method = PUT)
    Group update(@ApiParam(value = 'ID of Group to fetch', required = true) @PathVariable('id') Long id,
                 @ApiParam(value = '`Group` object to update', required = true) @RequestBody Group body) {
        super.update(id, body)
    }

    @Override
    Service<Group> getService() { service }
}
