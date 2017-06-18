package au.org.berrystreet.familyfinder.api.dto.vis

class VisDto {
    private List<NodeDto> nodes
    private List<EdgeDto>  edges

    List<NodeDto> getNodes() {
        return nodes
    }

    void setNodes(List<NodeDto> nodes) {
        this.nodes = nodes
    }

    List<EdgeDto> getEdges() {
        return edges
    }

    void setEdges(List<EdgeDto> edges) {
        this.edges = edges
    }
}
