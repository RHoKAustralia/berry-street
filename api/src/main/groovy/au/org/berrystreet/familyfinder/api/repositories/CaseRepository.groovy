package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Case
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

/**
 * Created by ishepher on 2016-06-05.
 */
@RepositoryRestResource(collectionResourceRel = "case", path = "case")
interface CaseRepository extends GraphRepository<Case> {

}