package au.org.berrystreet.familyfinder.api

import au.org.berrystreet.familyfinder.api.services.PersonService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

/**
 * Created by ishepher on 2016-06-04.
 */
// http://spring.io/guides/gs/accessing-neo4j-data-rest/
@SpringBootApplication
@EnableNeo4jRepositories
//@Configuration
//@Import(FamilyFinderNeo4jConfiguration.class)
@RestController("/")
class FamilyFinderApplication extends WebMvcConfigurerAdapter {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(FamilyFinderApplication.class, args);
    }

    @Autowired
    PersonService personService;

    @RequestMapping("/graph")
    public Map<String, Object> graph(@RequestParam(value = "limit",required = false) Integer limit) {
        return personService.graph(limit == null ? 100 : limit);
    }

}
