package au.org.berrystreet.familyfinder.api.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

@RestController
class PersonController {

    @RequestMapping(value = '/person', produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    ResponseEntity<Map> create(@RequestBody Map<String, Object> payload) {
        println payload.name

        def result = [id: 12341456]
        new ResponseEntity<Map>(result, HttpStatus.valueOf(200))
    }

    @RequestMapping(value = '/person/{personId}', produces = APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
    ResponseEntity<Map> update(@PathVariable("personId") long personId, @RequestBody Map<String, Object> payload) {
        def result = [id: personId, name: payload.name]
        new ResponseEntity<Map>(result, HttpStatus.valueOf(200))
    }

    @RequestMapping(value = '/person/{personId}/relationships', produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    ResponseEntity<List> getRelationships(@PathVariable("personId") long personId) {
        def result = [
            [
                id: 51,
                name: 'Bertha',
                relationship: 'Aunt'
            ],
            [
                id: 52,
                name: 'Rob',
                relationship: 'Uncle'
            ]
        ]
        new ResponseEntity<List>(result, HttpStatus.valueOf(200))
    }
}
