package au.org.berrystreet.familyfinder.api.domain;

abstract class GraphEntity {

    // https://neo4j.com/docs/ogm-manual/current/#__graphid
    Long id;

    @Override
    boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || id == null || getClass() != o.getClass()) return false;

        GraphEntity entity = (GraphEntity) o;

        if (!id.equals(entity.id)) return false;

        return true;
    }

    @Override
    int hashCode() {
        return (id == null) ? -1 : id.hashCode();
    }

}