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

class CsvConverter extends AbstractHttpMessageConverter<List<? extends Entity>> {

    public static final MediaType MEDIA_TYPE = new MediaType('text', 'csv', Charset.forName('utf-8'))

    CsvConverter() {
        super(MEDIA_TYPE)
    }

    @Override
    protected boolean supports(Class<?> clazz) {
        return List.class.isAssignableFrom(clazz)
    }

    @Override
    protected List<? extends Entity> readInternal(Class<List<? extends Entity>> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        throw new UnsupportedOperationException('Not implemented')
    }

    @Override
    protected void writeInternal(List<? extends Entity> list, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        def filename = 'unknown'
        def fields = []
        switch (list.get(0)) {
            case { Person.class.isAssignableFrom(it.class) }:
                filename = 'person'
                fields += ['Name', 'Type', 'Tags', 'Description']
                break
            case { Relationship.class.isAssignableFrom(it.class) }:
                filename = 'relationship'
                fields += ['From', 'To', 'Type', 'Description']
                break
        }
        writeCsv(list, outputMessage, filename, fields)
    }

    void writeCsv(List<? extends Entity> list, HttpOutputMessage outputMessage, def filename, def fields) {
        outputMessage.headers.with {
            setContentType(MEDIA_TYPE)
            set('Content-Disposition', """attachment; filename="${filename}.csv" """)
        }

        def writer = new CSVWriter(new OutputStreamWriter(outputMessage.body))
        writer.writeNext(fields as String[])

        list.each {
            switch (it) {
                case Person:
                    writeTo(writer, it as Person)
                    break
                case Relationship:
                    writeTo(writer, it as Relationship)
                    break
            }
        }

        writer.flush()
        writer.close()
    }

    void writeTo(CSVWriter writer, Person person) {
        person.with {
            writer.writeNext([
                "$givenNames $familyName",
                'type',
                'tags',
                'description'
            ] as String[])
        }
    }

    void writeTo(CSVWriter writer, Relationship rel) {
        rel.with {
            writer.writeNext([
                "${from.givenNames} ${from.familyName}",
                "${to.givenNames} ${to.familyName}",
                relationship,
                'description'
            ] as String[])
        }
    }

}
