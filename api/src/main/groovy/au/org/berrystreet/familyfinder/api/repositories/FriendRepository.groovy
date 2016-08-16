package au.org.berrystreet.familyfinder.api.repositories

import au.org.berrystreet.familyfinder.api.domain.Friend
import org.springframework.data.neo4j.repository.GraphRepository

interface FriendRepository extends GraphRepository<Friend> {
}
