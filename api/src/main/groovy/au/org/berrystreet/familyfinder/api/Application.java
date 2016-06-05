package au.org.berrystreet.familyfinder.api;

import au.org.berrystreet.familyfinder.api.services.CaseService;
import au.org.berrystreet.familyfinder.api.services.PersonService;
import org.neo4j.ogm.session.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.neo4j.config.Neo4jConfiguration;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.io.IOException;
import java.util.Map;

/**
 * Created by ishepher on 2016-06-04.
 */
// http://spring.io/guides/gs/accessing-neo4j-data-rest/
@SpringBootApplication
@EnableNeo4jRepositories
//@Configuration
//@Import(FamilyFinderNeo4jConfiguration.class)
//@RestController("/")
public class Application {//extends org.springframework.data.neo4j.config.Neo4jConfiguration {

    public Application() {
//        setBasePackage("au.org.berrystreet.familyfinder.api");
    }

    public static final String URL = System.getenv("NEO4J_URL") != null ? System.getenv("NEO4J_URL") : "http://neo4j:movies@localhost:7474";

//    @Bean
//    public org.neo4j.ogm.config.Configuration getConfiguration() {
//        org.neo4j.ogm.config.Configuration config = new org.neo4j.ogm.config.Configuration();
//        config
//                .driverConfiguration()
//                .setDriverClassName("org.neo4j.ogm.drivers.http.driver.HttpDriver")
//                .setURI(URL);
//        return config;
//    }

//    @Override
//    SessionFactory getSessionFactory() {
//        return new SessionFactory(getConfiguration(), "au.org.berrystreet.familyfinder.api.domain");
//    }
//
//    @Bean//(destroyMethod = "shutdown")
//    public GraphDatabaseService graphDatabaseService() {
////        new SpringRestGraphDatabase
////        new GraphDatabaseService().
//        // It seems like the latest spring data neo4j version might be 4.1 http://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#_dependencies_for_spring_data_neo4j_4_1
//        // But our Gradle pulls 3.4.4
//        return new GraphDatabaseFactory().newEmbeddedDatabase("target/familyfinder.db");
//    }

    public static void main(String[] args) throws IOException {
        SpringApplication.run(Application.class, args);
    }

    @Autowired CaseService caseService;
    @Autowired PersonService personService;

//    @RequestMapping("/graph")
//    public Map<String, Object> graph(@RequestParam(value = "limit",required = false) Integer limit) {
//        return personService.graph(limit == null ? 100 : limit);
//    }

}
