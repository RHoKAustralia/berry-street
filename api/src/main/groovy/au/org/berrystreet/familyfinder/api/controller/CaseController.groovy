package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.controller.requests.PersonChangeRequest
import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.services.CaseService
import au.org.berrystreet.familyfinder.api.services.PersonService
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.util.LinkedMultiValueMap
import org.springframework.util.MultiValueMap
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
        new ResponseEntity<Map>(result, defaultHeaders(), HttpStatus.OK)
    }

    @RequestMapping(
            value = '/case',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    ResponseEntity<String> get() {
        def result = caseService.getAll()
        def json = new ObjectMapper().writeValueAsString(result);
        new ResponseEntity<String>(json, defaultHeaders(), HttpStatus.OK)
    }

    @RequestMapping(
            value = '/case/{caseId}',
            produces = APPLICATION_JSON_VALUE,
            method = RequestMethod.GET)
    ResponseEntity<String> get(@PathVariable('caseId') long caseId) {
        def result = caseService.get(caseId)
        // TODO 404 if result == null
//        result.subject = new Person()
//        result.subject.name = "TEST"
        def json = new ObjectMapper().writeValueAsString(result);
        new ResponseEntity<String>(json, defaultHeaders(), HttpStatus.OK)
    }

    def defaultHeaders() {
        def headers = new LinkedMultiValueMap<String, String>()
        headers.add('Access-Control-Allow-Origin', '*')
        headers
    }

}
