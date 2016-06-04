package au.org.berrystreet.familyfinder.api.domain

import org.neo4j.ogm.annotation.GraphId
import org.neo4j.ogm.annotation.NodeEntity

@NodeEntity
class Person {

    @GraphId Long id;

    String name;

}
