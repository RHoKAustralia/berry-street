package au.org.berrystreet.familyfinder.api.controller

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE
import groovy.json.JsonOutput
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController


@RestController
class HelloController {

    @RequestMapping(value = '/hello', produces = APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    String hello() {
        JsonOutput.toJson(['message': 'Hello Berry Street!!'])
    }
}
