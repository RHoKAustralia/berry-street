package au.org.berrystreet.familyfinder.api.service

import au.com.bytecode.opencsv.CSVWriter
import au.org.berrystreet.familyfinder.api.domain.CSVCase
import org.springframework.http.HttpInputMessage
import org.springframework.http.HttpOutputMessage
import org.springframework.http.MediaType
import org.springframework.http.converter.AbstractHttpMessageConverter
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.http.converter.HttpMessageNotWritableException

import java.nio.charset.Charset

class CsvMessageConverter extends AbstractHttpMessageConverter<CSVCase> {
    public static final MediaType MEDIA_TYPE = new MediaType("text", "csv", Charset.forName("utf-8"))

    CsvMessageConverter() {
        super(MEDIA_TYPE)
    }

    @Override
    protected boolean supports(Class<?> clazz) {
        return CSVCase.class.equals(clazz)
    }

    @Override
    protected CSVCase readInternal(Class<? extends CSVCase> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        throw new UnsupportedOperationException("Not implemented")
    }

    @Override
    protected void writeInternal(CSVCase csvCase, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        outputMessage.getHeaders().setContentType(MEDIA_TYPE)
        outputMessage.getHeaders().set("Content-Disposition", "attachment; filename=\"" + csvCase.getFilename() + "\"")
        def body = outputMessage.getBody()
        def writer = new CSVWriter(new OutputStreamWriter(body))
        writer.writeNext(csvCase.line as String[])
        writer.flush()
        writer.close()
    }
}
