package au.org.berrystreet.familyfinder.api.controller

import javax.xml.bind.annotation.XmlTransient

@javax.xml.bind.annotation.XmlRootElement
class ApiResponseMessage {
    static final int ERROR = 1
    static final int WARNING = 2
    static final int INFO = 3
    static final int OK = 4
    static final int TOO_BUSY = 5

    @XmlTransient
    int code
    String type
    String message

    ApiResponseMessage() {}

    ApiResponseMessage(int code, String message) {
        this.code = code
        switch (code) {
            case ERROR:
                setType('error')
                break
            case WARNING:
                setType('warning')
                break
            case INFO:
                setType('info')
                break
            case OK:
                setType('ok')
                break
            case TOO_BUSY:
                setType('too busy')
                break
            default:
                setType('unknown')
                break
        }
        this.message = message
    }
}
