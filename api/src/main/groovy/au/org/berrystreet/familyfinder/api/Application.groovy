package au.org.berrystreet.familyfinder.api

import au.org.berrystreet.familyfinder.api.configuration.SwaggerDocumentationConfig
import groovy.transform.CompileStatic
import org.neo4j.ogm.session.Session
import org.neo4j.ogm.session.SessionFactory
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Import
import org.springframework.context.annotation.PropertySource
import org.springframework.context.annotation.PropertySources
import org.springframework.context.annotation.Scope
import org.springframework.context.annotation.ScopedProxyMode
import org.springframework.core.env.Environment
import org.springframework.data.neo4j.config.Neo4jConfiguration
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories
import org.springframework.transaction.annotation.EnableTransactionManagement
import springfox.documentation.swagger2.annotations.EnableSwagger2

@CompileStatic
@SpringBootApplication
@EnableSwagger2
@Import(SwaggerDocumentationConfig)
@EnableNeo4jRepositories(basePackages = 'au.org.berrystreet.familyfinder.api.repositories')
@EnableTransactionManagement
@PropertySources([
    @PropertySource("classpath:application.properties"),
    @PropertySource("classpath:auth0.properties"),
    @PropertySource(name = "For 'auth0.clientSecret' param, only needed if you're using auth0",
            value = "classpath:auth0.secret.properties", ignoreResourceNotFound = true)
])
class Application extends Neo4jConfiguration {

    private final Logger log = LoggerFactory.getLogger(Application.class)

    @Autowired
    private Environment env

    @Override
    @Bean
    SessionFactory getSessionFactory() {
        log.info('Initialising Session Factory')
        new SessionFactory(env.getRequiredProperty('domain'))
    }

    @Override
    @Bean
    @Scope(value = 'session', proxyMode = ScopedProxyMode.TARGET_CLASS)
    Session getSession() throws Exception {
        log.info('Initialising session-scoped Session Bean')
        super.getSession()
    }

    static void main(String[] args) throws IOException {
        SpringApplication.run(Application, args)
    }

}
