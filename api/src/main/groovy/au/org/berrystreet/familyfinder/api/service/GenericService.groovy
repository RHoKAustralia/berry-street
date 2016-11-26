package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Entity
import org.springframework.data.neo4j.repository.GraphRepository

abstract class GenericService<T> implements Service<T> {

    private static final int DEPTH_LIST = 0
    private static final int DEPTH_ENTITY = 1

    @Override
    Iterable<T> findAll(int depth) {
        getRepository().findAll(depth)
    }

    @Override
    T find(Long id) {
        getRepository().findOne(id, DEPTH_ENTITY)
    }

    @Override
    T createOrUpdate(T entity) {
        // TODO 'UsernameService' example shows how to add a user role precondition. https://github.com/auth0-samples/auth0-spring-security-api-sample
        getRepository().save(entity, DEPTH_ENTITY)
        find(((Entity) entity).id)
    }

    abstract GraphRepository<T> getRepository()
}
