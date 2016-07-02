package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.voodoodyne.jackson.jsog.JSOGGenerator

@JsonIdentityInfo(generator=JSOGGenerator)
@JsonIgnoreProperties(value=['@id', 'MetaClass'],ignoreUnknown=true)
public abstract class Entity {
    Long id
}