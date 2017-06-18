package au.org.berrystreet.familyfinder.api

import au.org.berrystreet.familyfinder.api.domain.Case
import au.org.berrystreet.familyfinder.api.domain.Connection
import au.org.berrystreet.familyfinder.api.domain.Person
import au.org.berrystreet.familyfinder.api.dto.vis.EdgeDto
import au.org.berrystreet.familyfinder.api.dto.vis.NodeDto
import au.org.berrystreet.familyfinder.api.dto.vis.VisDto
import org.neo4j.graphdb.Path
import org.neo4j.ogm.model.Result
import org.neo4j.ogm.response.model.QueryResultModel
import org.neo4j.ogm.session.Session
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.w3c.dom.NodeList


/**
 *                nodes: [
 { id: 1, label: 'Bart Simpson', group: "subject" },
 { id: 2, label: 'Lisa Simpson', group: "family" },
 { id: 3, label: 'Homer Simpson', group: "family" },
 { id: 4, label: 'Marge Simpson', group: "family" },
 { id: 5, label: 'Milhouse Van Houten', group: "person" }
 ],
 edges: [
 { from: 1, to: 2, label: "Sibling", font: {align: 'middle'} },
 { from: 1, to: 3, label: "Father", font: {align: 'middle'} },
 { from: 1, to: 4, label: "Mother", font: {align: 'middle'} },
 { from: 1, to: 5, label: "Friend", font: {align: 'middle'} }
 ]
 */
@Service
class VisService {


    @Autowired
    Session session;

    VisDto getVis(long caseId) {
        VisDto vis = new VisDto()

        def nodes = Arrays.asList(
            new NodeDto(1, "Bart Simpson"),
            new NodeDto(1, "Lisa Simpson"),
            new NodeDto(1, "Homer Simpson1"),
            new NodeDto(2, "Marge Simpson"),
            new NodeDto(2, "Milhouse Van Houten")
        )
        vis.setNodes(nodes)
        vis.setEdges(Arrays.asList(
            new EdgeDto(1, 2, "Sibling"),
            new EdgeDto(1, 3, "Father"),
            new EdgeDto(1, 4, "Mother"),
            new EdgeDto(1, 5, "Friend")
        ))

        ///

        List<NodeDto> nodesList = new ArrayList<>()
        Set<Long> nodeIds = new HashSet<>()
        List<EdgeDto> edgesList = new ArrayList<>()

        QueryResultModel queryRes = session.query("match (n)-[*1..4]-(m) where id(n) = " + caseId+ " return n,m", new HashMap<>(), true)
//        QueryResultModel queryRes = session.query("match (n)-[*]-(m) where id(n) = " + caseId+ " return n,m", new HashMap<>(), true)
        Iterable<Map<String,Object>> list = queryRes.queryResults();
        for(Map entry: list) {
            println(entry.values())
            if(entry.keySet().size()>0 ) {
                def from = entry.values()[0]
                def to = entry.values()[1]

                if((from instanceof Person && from instanceof Case ) || (to instanceof Person && to instanceof Case  ||
                    (from instanceof Person && from instanceof Person || (from instanceof Case && from instanceof Case))
                )) {
                    if(!nodeIds.contains(from.getId())) {
                        nodesList.add(new NodeDto(from.getId(),  from.getDisplayName()))
                        nodeIds.add(from.getId())
                    } else  if(!nodeIds.contains(to.getId())){
                        nodesList.add(new NodeDto(to.getId(),  to.getDisplayName()))
                        nodeIds.add(to.getId())
                    }

                    def edge = new EdgeDto(from.getId(), to.getId(), "")
                    if(!edgesList.contains(edge)) {
                        edgesList.add(edge)
                    }
                }

            }

        }

        vis.setNodes(nodesList)
        vis.setEdges(edgesList)
        ///
        vis
    }


}
