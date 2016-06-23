package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Case
import org.springframework.data.neo4j.repository.GraphRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@SuppressWarnings("GroovyUnusedDeclaration") // Autogens the /cases CRUD operations
@RepositoryRestResource
interface CaseRepository extends GraphRepository<Case> {

}