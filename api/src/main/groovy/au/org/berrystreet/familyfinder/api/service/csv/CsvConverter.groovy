package au.org.berrystreet.familyfinder.api.service.csv

import au.com.bytecode.opencsv.CSVWriter
import au.org.berrystreet.familyfinder.api.domain.Entity
import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.domain.Relationship
import org.springframework.http.HttpInputMessage
import org.springframework.http.HttpOutputMessage
import org.springframework.http.MediaType
import org.springframework.http.converter.AbstractHttpMessageConverter
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.http.converter.HttpMessageNotWritableException

import java.nio.charset.Charset

class CsvConverter extends AbstractHttpMessageConverter<List<Entity>> {
    public static final MediaType MEDIA_TYPE = new MediaType("text", "csv", Charset.forName("utf-8"))

    CsvConverter() {
        super(MEDIA_TYPE)
    }

    @Override
    protected boolean supports(Class<?> clazz) {
        return  List.class.isAssignableFrom(clazz)
    }

    @Override
    protected List<Entity> readInternal(Class<? extends List<Entity>> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        throw new UnsupportedOperationException("Not implemented")
    }

    @Override
    protected void writeInternal(List<Entity> list, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        outputMessage.getHeaders().setContentType(MEDIA_TYPE)
        if (list.get(0).class.isAssignableFrom(Person.class)) {
            outputMessage.getHeaders().set("Content-Disposition", "attachment; filename=\"personcsv.csv\"")
            def body = outputMessage.getBody()
            new CSVWriter(new OutputStreamWriter(body)).with {

                writeNext(["Name", "Type", "Tags", "Description"] as String[])
                list.each { Person person ->
                    writeNext([person.givenNames + " " + person.familyName, "type", "tags", "description"] as String[])
                }
                flush()
                close()
            }
        } else if (Relationship.class.isAssignableFrom(list.get(0).class)) {
            outputMessage.getHeaders().set("Content-Disposition", "attachment; filename=\"relationshipcsv.csv\"")
            def body = outputMessage.getBody()

            new CSVWriter(new OutputStreamWriter(body)).with {
                writeNext(["From", "To", "Type", "Description"] as String[])
                list.each { Relationship relationship ->
                    writeNext([relationship.from.givenNames + " " + relationship.from.familyName,
                               relationship.to.givenNames + " " + relationship.to.familyName,
                               relationship.relationship, "description"] as String[])
                }
                flush()
                close()
            }
        }
    }
}
