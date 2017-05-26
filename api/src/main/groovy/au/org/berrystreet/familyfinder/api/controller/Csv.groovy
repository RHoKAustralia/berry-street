package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Connection
import au.org.berrystreet.familyfinder.api.domain.internals.GraphNode
import au.org.berrystreet.familyfinder.api.service.ConnectionService
import au.org.berrystreet.familyfinder.api.service.GraphNodeService
import io.swagger.annotations.Api
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import javax.servlet.http.HttpServletResponse

import static au.org.berrystreet.familyfinder.api.Constants.TEXT_CSV
import static org.springframework.web.bind.annotation.RequestMethod.GET

@RestController
@RequestMapping(value = '/csv', produces = TEXT_CSV)
@Api(value = '/csv', description = 'the csv output API')
@CrossOrigin(origins = '*')
class Csv {

    @Autowired
    GraphNodeService graphNodeService

    @Autowired
    ConnectionService connectionService

    @RequestMapping(
            value = '/entities',
            method = GET)
    Iterable<GraphNode> find_as_csv(HttpServletResponse response) {
        graphNodeService.findAll()
    }

    @RequestMapping(
            value = "/relationships",
            method = GET)
    Iterable<Connection> relationships_as_csv(HttpServletResponse response) {
        connectionService.findAll()
    }

}
