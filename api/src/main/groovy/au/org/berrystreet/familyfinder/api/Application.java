package au.org.berrystreet.familyfinder.api;

import au.org.berrystreet.familyfinder.api.configuration.SwaggerDocumentationConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.io.IOException;

// http://spring.io/guides/gs/accessing-neo4j-data-rest/
@SpringBootApplication
@EnableSwagger2
@Import(SwaggerDocumentationConfig.class)
//@EnableNeo4jRepositories
//@Configuration
//@Import(FamilyFinderNeo4jConfiguration.class)
//@RestController("/")
public class Application {//extends org.springframework.data.neo4j.config.Neo4jConfiguration {

    public Application() {
//        setBasePackage("au.org.berrystreet.familyfinder.api");
    }

    public static final String URL = System.getenv("NEO4J_HOST") != null ? System.getenv("NEO4J_HOST") : "http://neo4j:movies@localhost:7474";

    public static void main(String[] args) throws IOException {
        SpringApplication.run(Application.class, args);
    }

//    @RequestMapping("/graph")
//    public Map<String, Object> graph(@RequestParam(value = "limit",required = false) Integer limit) {
//        return personService.graph(limit == null ? 100 : limit);
//    }

}
