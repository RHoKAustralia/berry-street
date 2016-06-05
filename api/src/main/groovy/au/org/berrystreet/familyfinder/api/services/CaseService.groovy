package au.org.berrystreet.familyfinder.api.services

import au.org.berrystreet.familyfinder.api.controller.requests.RelationshipRequest
import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.repositories.CaseRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

/**
 * Created by ishepher on 2016-06-05.
 */
@Service
@Transactional
class CaseService {

    @Autowired CaseRepository caseRepository;

    Iterable<Case> getAll() {
        caseRepository.findAll()
    }

    def get(long caseId) {
        caseRepository.findOne(caseId, 2)
    }

    Long create(Case caseCreateRequest) {
        caseCreateRequest.id = null;
        // validation etc....
        def newObj = caseRepository.save(caseCreateRequest)
        newObj.id
    }

    def upsert(Case caseUpdateRequest) {
        caseRepository.save(caseUpdateRequest)
    }

}
