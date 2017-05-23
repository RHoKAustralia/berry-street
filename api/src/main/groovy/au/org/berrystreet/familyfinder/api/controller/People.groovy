package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.domain.Family
import au.org.berrystreet.familyfinder.api.domain.Friend
import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.domain.Relationship
import au.org.berrystreet.familyfinder.api.service.FamilyService
import au.org.berrystreet.familyfinder.api.service.FriendService
import au.org.berrystreet.familyfinder.api.service.PersonService
import au.org.berrystreet.familyfinder.api.service.Service
import io.swagger.annotations.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

import javax.servlet.http.HttpServletResponse

import static au.org.berrystreet.familyfinder.api.Constants.APPLICATION_JSON
import static au.org.berrystreet.familyfinder.api.Constants.TEXT_CSV
import static org.springframework.web.bind.annotation.RequestMethod.*

@RestController
@RequestMapping(value = '/people', produces = [APPLICATION_JSON])
@Api(value = '/people', description = 'the person API')
@CrossOrigin(origins='*')
class People extends Controller<Person> {

    @Autowired
    PersonService service

    @Autowired
    FamilyService familyService

    @Autowired
    FriendService friendService

    @ApiOperation(value = '', notes = 'Creates a new `Person`', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 405, message = 'Invalid input', response = Person)])
    @RequestMapping(
            value = '',
            consumes = [APPLICATION_JSON],
            method = POST)
    Person create( @ApiParam(value = '`Person` object to create', required = true) @RequestBody Person body) {
        super.create(body)
    }

    @ApiOperation(value = '', notes = 'List all `Person`s that match the criteria provided')
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response')])
    @RequestMapping(
            value = '',
            method = GET)
    Person[] list() {
        super.list() as Person[]
    }


    @ApiOperation(value = '', notes = 'Gets `Person` identified with `id`', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Person)])
    @RequestMapping(
            value = '/{id}',
            method = GET)
    Person find(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id) {
        super.find(id)
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
        super.update(id, body)
    }

    @ApiOperation(value = '', notes = 'Gets Family of `Person` identified with `id`', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Person)])
    @RequestMapping(
            value = '/{id}/family',
            method = GET)
    List<Family> listFamily(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id) {
        (super.find(id) as Person).family
    }
    @RequestMapping(
            value = '/{id}/family',
            method = PUT)
    Person addFamily(@ApiParam(value = 'this person', required = true) @PathVariable('id') Long id,
                     @ApiParam(value = 'relationship', required = true) @RequestParam('relationship') String relationship,
                     @ApiParam(value = 'relative', required = true) @RequestParam('kinId') Long kinId,
                     @ApiParam(value = 'howFound', required = false) @RequestParam('howFound') String howFound,
                     @ApiParam(value = 'howInfoConfirmed', required = false) @RequestParam('howInfoConfirmed') String howInfoConfirmed,
                     @ApiParam(value = 'notes', required = false) @RequestParam('notes') String notes,
                     @ApiParam(value = 'riskAlert', required = false) @RequestParam('riskAlert') String riskAlert) {
        Person kin = super.find(kinId) as Person
        Person person = super.find(id) as Person
        Family family = new Family(kin, person, relationship, howFound, howInfoConfirmed, notes, riskAlert)
        familyService.repository.save(family)
        person
    }

    @ApiOperation(value = '', notes = 'Gets Friends of `Person` identified with `id`', response = Person)
    @ApiResponses(value = [@ApiResponse(code = 200, message = 'Successful response', response = Person)])
    @RequestMapping(
            value = '/{id}/friends',
            method = GET)
    List<Family> listFriends(@ApiParam(value = 'ID of person to fetch', required = true) @PathVariable('id') Long id) {
        (super.find(id) as Person).family
    }
    @RequestMapping(
            value = '/{id}/friends',
            method = PUT)
    Person addFriend(@ApiParam(value = 'this person', required = true) @PathVariable('id') Long id,
                     @ApiParam(value = 'relationship', required = true) @RequestParam('relationship') String relationship,
                     @ApiParam(value = 'friend', required = true) @RequestParam('friendId') Long friendId,
                     @ApiParam(value = 'howFound', required = false) @RequestParam('howFound') String howFound,
                     @ApiParam(value = 'howInfoConfirmed', required = false) @RequestParam('howInfoConfirmed') String howInfoConfirmed,
                     @ApiParam(value = 'notes', required = false) @RequestParam('notes') String notes,
                     @ApiParam(value = 'riskAlert', required = false) @RequestParam('riskAlert') String riskAlert) {
        Person friend = super.find(friendId) as Person
        Person person = super.find(id) as Person
        Friend friendship = new Friend(friend, person, relationship, howFound, howInfoConfirmed, notes, riskAlert)
        friendService.repository.save(friendship)
        person
    }


    @RequestMapping(
            value = '/csv/entities',
            produces = [TEXT_CSV],
            method = GET)
    List<Person> find_as_csv(HttpServletResponse response) {
        def array = super.list() as Person[]
        return array.toList()
    }

    @RequestMapping(
            value = "/csv/relationships",
            produces = [TEXT_CSV],
            method = GET)
    List<Relationship> relationships_as_csv(HttpServletResponse response) {
        def array = super.list() as Person[]
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

    @Override
    Service<Person> getService() { service }
}
