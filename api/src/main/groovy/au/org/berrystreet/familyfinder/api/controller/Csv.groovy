package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Connection
import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.service.ConnectionService
import au.org.berrystreet.familyfinder.api.service.PersonService
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
    PersonService personService

    @Autowired
    ConnectionService connectionService

    @RequestMapping(
            value = '/entities',
            method = GET)
    List<Person> find_as_csv(HttpServletResponse response) {
        def array = personService.findAll() as Person[]
        return array.toList()
    }

    @RequestMapping(
            value = "/relationships",
            method = GET)
    List<Connection> relationships_as_csv(HttpServletResponse response) {
        def array = connectionService.findAll() as Connection[]
        Set<Connection> ret = new HashSet<Connection>()
        for (person in array) {
            for (connection in person.connections) {
                ret.add(connection)
            }
        }
        return ret.toList()
    }

}
