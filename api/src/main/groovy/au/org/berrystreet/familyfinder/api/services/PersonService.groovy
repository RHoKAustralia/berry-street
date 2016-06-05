package au.org.berrystreet.familyfinder.api.services;

import au.org.berrystreet.familyfinder.api.controller.requests.PersonChangeRequest
import au.org.berrystreet.familyfinder.api.controller.requests.RelationshipRequest
import au.org.berrystreet.familyfinder.api.domain.Person;
import au.org.berrystreet.familyfinder.api.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@SuppressWarnings(['DuplicateStringLiteral', 'UnusedMethodParameter', 'DuplicateListLiteral'])
@Service
@Transactional
class PersonService {

    @Autowired PersonRepository personRepository;

    Long create(PersonChangeRequest personChangeRequest) {
        personRepository.save(new Person(
                name: personChangeRequest.name
            )
        ).id
    }

    def update(long personId, PersonChangeRequest personChangeRequest) {
        def person = personRepository.findOne(personId)
        person.name = personChangeRequest.name
        personRepository.save(person)
    }

    def findRelationshipsForPerson(long personId) {
        [
            [
                id          : 51,
                name        : 'Bertha',
                relationship: 'Aunt'
            ],
            [
                id          : 52,
                name        : 'Rob',
                relationship: 'Uncle'
            ]
        ]
    }

    def createRelationship(long fromPerson, long toPerson, RelationshipRequest relationshipRequest) {
        def to = personRepository.findOne(toPerson)
        def from = personRepository.findOne(fromPerson)
        switch(relationshipRequest.type) {
            case 'HAS_MOTHER':
                from.mother = to
                break;
            case 'HAS_FATHER':
                from.father = to
                break;
        }
        personRepository.save(from)
    }

}
