package au.org.berrystreet.familyfinder.api.configuration

import au.org.berrystreet.familyfinder.api.service.csv.CsvPeopleConverter
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.MediaType
import org.springframework.http.converter.HttpMessageConverter
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

@Configuration
class ApiConfiguration extends WebMvcConfigurerAdapter {
    @Override
    void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer.defaultContentType(MediaType.APPLICATION_JSON)
    }

    @Bean
    CsvPeopleConverter csvPeopleConverter() {
        return new CsvPeopleConverter()
    }

    @Override
    void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(csvPeopleConverter())
        super.extendMessageConverters(converters)
    }
}
