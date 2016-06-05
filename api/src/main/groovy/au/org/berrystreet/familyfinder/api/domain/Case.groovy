package au.org.berrystreet.familyfinder.api.domain

import com.fasterxml.jackson.annotation.JsonIdentityInfo
import com.fasterxml.jackson.annotation.JsonProperty
import com.voodoodyne.jackson.jsog.JSOGGenerator
import org.neo4j.ogm.annotation.GraphId
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

//@JsonIdentityInfo(generator=JSOGGenerator)
@NodeEntity
class Case {

    // TODO this is not serialized by Jackson
    // An example used @JsonIdentityInfo(generator=JSOGGenerator) but that means it invents its own ids
    // Figure it out or call our ID something else
    @GraphId Long id

    public Long getCaseId() {
        return id;
    }
    public void setCaseId(Long id) {
        this.id = id;
    }

    String staffName

    @Relationship(type = "SUBJECT", direction = Relationship.OUTGOING)
    Person subject;

    String status // TODO enum
    String dateOpened // TODO date
    String caseObjective
}
