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

@EnableTransactionManagement
@Import(RepositoryRestMvcConfiguration)
@EnableScheduling
@EnableAutoConfiguration
@ComponentScan(basePackages = ['au.org.berrystreet.familyfinder.api.services'])
@Configuration
@EnableNeo4jRepositories(basePackages = 'au.org.berrystreet.familyfinder.api.repositories')
class FamilyFinderNeo4jConfiguration extends Neo4jConfiguration {
    static final String NEO4JENVURL = 'NEO4J_URL'
    static final String URL = System.getenv(NEO4JENVURL) != null ?
            System.getenv(NEO4JENVURL) : 'http://neo4j:movies@localhost:7474'

    @Bean
    org.neo4j.ogm.config.Configuration getConfiguration() {
        def config = new org.neo4j.ogm.config.Configuration()
        config
                .driverConfiguration()
                .setDriverClassName('org.neo4j.ogm.drivers.http.driver.HttpDriver')
                .setURI(URL)
        config
    }

    @Override
    SessionFactory getSessionFactory() {
        new SessionFactory(configuration, 'au.org.berrystreet.familyfinder.api.domain')
    }
}
