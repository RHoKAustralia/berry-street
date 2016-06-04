package au.org.berrystreet.familyfinder.api.services

import au.org.berrystreet.familyfinder.api.controller.requests.PersonChangeRequest
import au.org.berrystreet.familyfinder.api.controller.requests.RelationshipRequest
import au.org.berrystreet.familyfinder.api.repositories.PersonRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@SuppressWarnings(['DuplicateStringLiteral', 'UnusedMethodParameter', 'DuplicateListLiteral'])
@Service
@Transactional
class PersonService {

    @Autowired
    PersonRepository personRepository

    Long newPerson(PersonChangeRequest personChangeRequest) {
        12345
    }

    def update(long personId, PersonChangeRequest personChangeRequest) {

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

    def newRelationship(long fromPerson, long toPerson, RelationshipRequest relationshipRequest) {
        4321
    }

    private Map toD3Format(Iterator result) {
        def nodes = [[:]]
        def rels = [[:]]
        int i = 0
        while (result.hasNext()) {
            def row = result.next()
            nodes.add(map('title', row.get('movie'), 'label', 'movie'))
            int target = i
            i++
            for (Object name : (Collection) /*(String[])*/ row.get('cast')) {
                def actor = ['title', name, 'label', 'actor']
                int source = nodes.indexOf(actor)
                if (source == -1) {
                    nodes.add(actor)
                    source = i++
                }
                rels.add(map('source', source, 'target', target))
            }
        }
        map('nodes', nodes, 'links', rels)
    }

    private Map map(String key1, Object value1, String key2, Object value2) {
        def result = [:]
        result.put(key1, value1)
        result.put(key2, value2)
        result
    }

    Map graph(int limit) {
        Iterator<Map<String, Object>> result = personRepository.graph(limit).iterator()
        toD3Format(result)
    }

}
