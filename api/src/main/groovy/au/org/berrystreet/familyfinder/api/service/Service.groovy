package au.org.berrystreet.familyfinder.api.service

interface Service<T> {

    Iterable<T> findAll()

    T find(Long id)

//    void delete(Long id)

    T createOrUpdate(T object)

}
