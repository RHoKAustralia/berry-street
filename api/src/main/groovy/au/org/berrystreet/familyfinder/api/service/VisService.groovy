package au.org.berrystreet.familyfinder.api

import au.org.berrystreet.familyfinder.api.dto.vis.EdgeDto
import au.org.berrystreet.familyfinder.api.dto.vis.NodeDto
import au.org.berrystreet.familyfinder.api.dto.vis.VisDto
import org.springframework.stereotype.Service


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

        vis
    }
}
