package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.domain.Entity
import org.springframework.data.neo4j.repository.GraphRepository

abstract class GenericService<T> implements Service<T> {

    private static final int DEPTH_ENTITY = 1

    @Override
    Iterable<T> findAll() {
        getRepository().findAll()
    }

    @Override
    T find(Long id) {
        getRepository().findOne(id)
    }

    @Override
    T createOrUpdate(T entity) {
        getRepository().save(entity, DEPTH_ENTITY)
        find(((Entity) entity).id)
    }

    abstract GraphRepository<T> getRepository()
}
