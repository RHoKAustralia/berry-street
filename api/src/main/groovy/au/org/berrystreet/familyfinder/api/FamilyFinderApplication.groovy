package au.org.berrystreet.familyfinder.api

import au.org.berrystreet.familyfinder.api.services.PersonService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter


@SpringBootApplication
@EnableNeo4jRepositories
@RestController('/')
class FamilyFinderApplication extends WebMvcConfigurerAdapter {

    static void main(String[] args) throws IOException {
        SpringApplication.run(FamilyFinderApplication, args)
    }

    @Autowired
    PersonService personService

    @RequestMapping('/graph')
    Map<String, Object> graph(@RequestParam(value = 'limit',required = false) Integer limit) {
        personService.graph(limit == null ? 100 : limit)
    }

}
