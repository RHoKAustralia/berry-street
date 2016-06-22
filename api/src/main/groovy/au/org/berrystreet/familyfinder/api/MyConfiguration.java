package au.org.berrystreet.familyfinder.api;

import org.neo4j.ogm.session.SessionFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.neo4j.config.Neo4jConfiguration;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

// http://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#_java_based_bean_configuration
// (4.1 release)
@EnableTransactionManagement
@Configuration
@EnableNeo4jRepositories(basePackages = "au.org.berrystreet.familyfinder.api.repositories")
@Import(RepositoryRestMvcConfiguration.class)
@EnableAutoConfiguration
//@ComponentScan(basePackages = "au.org.berrystreet.familyfinder.api.services")
public class MyConfiguration extends Neo4jConfiguration {

    static final String NEO4JENVURL = "NEO4J_HOST";
    static final String URL = System.getenv(NEO4JENVURL) != null ?
            System.getenv(NEO4JENVURL) : "http://neo4j:movies@localhost:7474";

    @Bean
    org.neo4j.ogm.config.Configuration getConfiguration() {
        // Another option is 'ogm.properties' file. http://neo4j.com/docs/ogm-manual/current/#tutorial_session
        org.neo4j.ogm.config.Configuration config = new org.neo4j.ogm.config.Configuration();
        config
                .driverConfiguration()
                .setDriverClassName("org.neo4j.ogm.drivers.http.driver.HttpDriver")
                .setURI(URL);
        return config;
    }

    @Bean
    Validator beanValidation() {
        return new LocalValidatorFactoryBean();
    }

    @Override
    public SessionFactory getSessionFactory() {
        return new SessionFactory(getConfiguration(), "au.org.berrystreet.familyfinder.api.domain");
    }
}


//    // needed for session in view in web-applications
//    @Bean
//    @Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
//    public Session getSession() throws Exception {
//        return super.getSession();
//    }
// sessionfactory bean, session bean http://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#_sessionfactory_bean

