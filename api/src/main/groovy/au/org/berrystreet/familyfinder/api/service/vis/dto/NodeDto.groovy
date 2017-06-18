package au.org.berrystreet.familyfinder.api.service.vis.dto

class NodeDto {
    private long id
    private String label

    NodeDto(long id, String label) {
        this.id = id
        this.label = label
    }

    long getId() {
        return id
    }

    String getLabel() {
        return label
    }
}
