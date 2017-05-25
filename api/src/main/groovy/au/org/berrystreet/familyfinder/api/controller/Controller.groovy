package au.org.berrystreet.familyfinder.api.controller

import au.org.berrystreet.familyfinder.api.controller.exception.NotFoundException
import au.org.berrystreet.familyfinder.api.domain.internals.GraphItem
import au.org.berrystreet.familyfinder.api.service.Service
import org.springframework.web.bind.annotation.RequestMapping

@RequestMapping(value = '/')
abstract class Controller<T> {

    T[] list() {
        service.findAll()
    }

    T create(T entity) {
        service.createOrUpdate(entity)
    }

    T find(Long id) {
        T entity = service.find(id)
        if (entity == null) throw new NotFoundException()
        entity
    }

    T update(Long id, T entity) {
        if (service.find(id) == null) throw new NotFoundException()
        ((GraphItem) entity).id = id
        service.createOrUpdate(entity)
    }

    abstract Service<T> getService()
}
