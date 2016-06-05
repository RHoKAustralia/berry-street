package au.org.berrystreet.familyfinder.api.controller

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
class CaseController {

    private final String caseNumber = 'ABC123'
    private final String staffName = 'Jen'
    private final String child1Name = 'Layla'

    @RequestMapping(value = '/case', produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    ResponseEntity<Map> newCase() {
        def result = [id: 12341456]
        new ResponseEntity<Map>(result, HttpStatus.OK)
    }

    @RequestMapping(value = '/case/{id}', produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    ResponseEntity<Map> get(@PathVariable('id') long id) {
        def result = [
            caseId: id,
            caseNumber: caseNumber,
            staffName: staffName,
            subjectName: child1Name,
            status: 'Open',
            dateOpened: new Date(),
        ]

        new ResponseEntity<Map>(result, HttpStatus.OK)
    }

    @RequestMapping(value = '/case', produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    ResponseEntity<List<Map>> listAll() {

        def result = [
            [
                caseId: 1,
                caseNumber: caseNumber,
                staffName: staffName,
                childName: child1Name
            ],
            [
                caseId: 2,
                caseNumber: caseNumber,
                staffName: staffName,
                childName: 'Roslyn'
            ],
        ]

        new ResponseEntity<List<Map>>(result, HttpStatus.OK)
    }
}
