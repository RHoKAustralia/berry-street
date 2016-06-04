package au.org.berrystreet.familyfinder.api.controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

@RestController
class CaseController {

    @RequestMapping(value = '/case', produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    ResponseEntity<Map> create() {
        def result = [id: 12341456]
        new ResponseEntity<Map>(result, HttpStatus.valueOf(200))
    }

    @RequestMapping(value = '/case', produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    ResponseEntity<List<Map>> listAll() {

        def result = [
            [
                caseId: 1,
                staffName: 'Jen',
                childName: 'Layla'
            ],
            [
                caseId: 2,
                staffName: 'Jen',
                childName: 'Roslyn'
            ],
        ]

        new ResponseEntity<List<Map>>(result, HttpStatus.valueOf(200))
    }
}
