package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.controller.requests.PersonChangeRequest
import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.services.CaseService
import au.org.berrystreet.familyfinder.api.services.PersonService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestBody

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
class CaseController {

    @Autowired CaseService caseService

    @RequestMapping(
            value = '/case',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.POST)
    ResponseEntity<Map> create(@RequestBody Case caseCreateRequest) {
        def result = [id: caseService.create(caseCreateRequest)]
        new ResponseEntity<Map>(result, HttpStatus.OK)
    }

    @RequestMapping(
            value = '/case',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    ResponseEntity<Iterable> get() {
        def result = caseService.getAll()
        new ResponseEntity<Iterable>(result, HttpStatus.OK)
    }

    @RequestMapping(
            value = '/case/{caseId}',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    ResponseEntity<Case> get(@PathVariable('caseId') long caseId) {
        def result = caseService.get(caseId)
        new ResponseEntity<Case>(result, HttpStatus.OK)
        // TODO 404 if result == null
    }



//
//    @RequestMapping(value = '/case', produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
//    ResponseEntity<List<Map>> listAll() {
//
//        def result = [
//            [
//                caseId: 1,
//                caseNumber: caseNumber,
//                staffName: staffName,
//                childName: child1Name
//            ],
//            [
//                caseId: 2,
//                caseNumber: caseNumber,
//                staffName: staffName,
//                childName: 'Roslyn'
//            ],
//        ]
//
//        new ResponseEntity<List<Map>>(result, HttpStatus.OK)
//    }
}
