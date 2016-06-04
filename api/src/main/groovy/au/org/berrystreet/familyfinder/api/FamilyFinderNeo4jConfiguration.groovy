package au.org.berrystreet.familyfinder.api

import org.neo4j.ogm.session.SessionFactory
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import
import org.springframework.data.neo4j.config.Neo4jConfiguration
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.transaction.annotation.EnableTransactionManagement

/**
 * Created by ishepher on 2016-06-04.
 */
@EnableTransactionManagement
@Import(RepositoryRestMvcConfiguration.class)
@EnableScheduling
@EnableAutoConfiguration
@ComponentScan(basePackages = ["au.org.berrystreet.familyfinder.api.services"])
@Configuration
@EnableNeo4jRepositories(basePackages = "au.org.berrystreet.familyfinder.api.repositories")
class FamilyFinderNeo4jConfiguration extends Neo4jConfiguration {

    static final String URL = System.getenv("NEO4J_URL") != null ? System.getenv("NEO4J_URL") : "http://neo4j:movies@localhost:7474"

    @Bean
    org.neo4j.ogm.config.Configuration getConfiguration() {
        org.neo4j.ogm.config.Configuration config = new org.neo4j.ogm.config.Configuration()
        config
                .driverConfiguration()
                .setDriverClassName("org.neo4j.ogm.drivers.http.driver.HttpDriver")
                .setURI(URL)
        return config
    }

    @Override
    SessionFactory getSessionFactory() {
        return new SessionFactory(getConfiguration(), "au.org.berrystreet.familyfinder.api.domain");
    }

}
