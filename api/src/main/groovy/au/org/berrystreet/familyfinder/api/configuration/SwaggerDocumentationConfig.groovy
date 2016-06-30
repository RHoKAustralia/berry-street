package au.org.berrystreet.familyfinder.api.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.service.Contact
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket

@Configuration
class SwaggerDocumentationConfig {

    ApiInfo apiInfo() {
        new ApiInfoBuilder()
                .title('Berry Street - Family Finder')
                .description('')
                .license('')
                .licenseUrl('')
                .termsOfServiceUrl('')
                .version('1.0.0')
                .contact(new Contact('', '', ''))
                .build()
    }

    @Bean
    Docket customImplementation() {
        new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage('au.org.berrystreet.familyfinder.api.controller'))
                .build()
                .apiInfo(apiInfo())
    }

}
