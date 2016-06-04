package au.org.berrystreet.familyfinder.api.controller

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

import au.org.berrystreet.familyfinder.api.controller.requests.PersonChangeRequest
import au.org.berrystreet.familyfinder.api.controller.requests.RelationshipRequest
import au.org.berrystreet.familyfinder.api.services.PersonService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
class PersonController {

    @Autowired PersonService personService

    @RequestMapping(
            value = '/person',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.POST)
    ResponseEntity<Map> newPerson(@RequestBody PersonChangeRequest personChangeRequest) {
        def result = [id: personService.create(personChangeRequest)]
        new ResponseEntity<Map>(result, HttpStatus.OK)
    }

    @RequestMapping(
            value = '/person/{personId}',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.PUT)
    ResponseEntity update(@PathVariable('personId') long personId,
                          @RequestBody PersonChangeRequest personChangeRequest) {
        personService.update(personId, personChangeRequest)
        new ResponseEntity(HttpStatus.OK)
    }

    @RequestMapping(
            value = '/person/{personId}/relationships',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    ResponseEntity<List> getRelationships(@PathVariable('personId') long personId) {
        new ResponseEntity<List>(personService.findRelationshipsForPerson(personId), HttpStatus.valueOf(200))
    }

    @RequestMapping(
            value = '/person/{personId}/relationshipWith/{otherPersonId}',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.POST)
    ResponseEntity<Map> newRelationship(    @PathVariable('personId') long personId,
                                            @PathVariable('otherPersonId') long otherPersonId,
                                            @RequestBody RelationshipRequest relationshipRequest) {
        def result = [id: personService.createRelationship(personId, otherPersonId, relationshipRequest)]
        new ResponseEntity<Map>(result, HttpStatus.OK)
    }
}
