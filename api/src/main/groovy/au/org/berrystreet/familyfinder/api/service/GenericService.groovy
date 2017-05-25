package au.org.berrystreet.familyfinder.api.service

import au.org.berrystreet.familyfinder.api.controller.exception.NotFoundException
import au.org.berrystreet.familyfinder.api.domain.internals.GraphItem
import org.springframework.data.neo4j.repository.GraphRepository

abstract class GenericService<T> {

    private static final int DEPTH_ENTITY = 1

    T create(T entity) {
        createOrUpdate(entity)
    }

    T update(Long id, T entity) {
        find(id)
        ((GraphItem) entity).id = id
        createOrUpdate(entity)
    }

    Iterable<T> findAll() {
        getRepository().findAll()
    }

    T find(Long id) {
        T entity = getRepository().findOne(id)
        if (entity == null) throw new NotFoundException()
        entity
    }

    T createOrUpdate(T entity) {
        getRepository().save(entity, DEPTH_ENTITY)
        find(((GraphItem) entity).id)
    }

    abstract GraphRepository<T> getRepository()
}
