package au.org.berrystreet.familyfinder.api.service

import au.com.bytecode.opencsv.CSVWriter
import au.org.berrystreet.familyfinder.api.domain.Person
import org.springframework.http.HttpInputMessage
import org.springframework.http.HttpOutputMessage
import org.springframework.http.MediaType
import org.springframework.http.converter.AbstractHttpMessageConverter
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.http.converter.HttpMessageNotWritableException

import java.nio.charset.Charset

class CsvMessageConverter extends AbstractHttpMessageConverter<List<Person>> {
    public static final MediaType MEDIA_TYPE = new MediaType("text", "csv", Charset.forName("utf-8"))

    CsvMessageConverter() {
        super(MEDIA_TYPE)
    }

    @Override
    protected boolean supports(Class<?> clazz) {
        return  List.class.isAssignableFrom(clazz)
    }

    @Override
    protected List<Person> readInternal(Class<? extends List<Person>> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        throw new UnsupportedOperationException("Not implemented")
    }

    @Override
    protected void writeInternal(List<Person> people, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        outputMessage.getHeaders().setContentType(MEDIA_TYPE)
        outputMessage.getHeaders().set("Content-Disposition", "attachment; filename=\"personcsv.csv\"")
        def body = outputMessage.getBody()
        def writer = new CSVWriter(new OutputStreamWriter(body))
        writer.writeNext(["Name","Type","Tags","Description"] as String[])
        people.each { person ->
            writer.writeNext([person.givenNames + " " + person.familyName, "type","tags","description"] as String[])
        }
        writer.flush()
        writer.close()
    }
}
