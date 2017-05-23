package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.domain.Relationship
import au.org.berrystreet.familyfinder.api.service.FamilyService
import au.org.berrystreet.familyfinder.api.service.FriendService
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
    FamilyService familyService

    @Autowired
    FriendService friendService


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
    List<Relationship> relationships_as_csv(HttpServletResponse response) {
        def array = personService.findAll() as Person[]
        Set<Relationship> ret = new HashSet<Relationship>()
        for (person in array) {
            for (relation in person.friends) {
                ret.add(relation)
            }
            for (relation in person.family) {
                ret.add(relation)
            }
        }
        return ret.toList()
    }

}
