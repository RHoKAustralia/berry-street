package au.org.berrystreet.familyfinder.api.dto.vis

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

    boolean equals(o) {
        if (this.is(o)) return true
        if (getClass() != o.class) return false

        NodeDto nodeDto = (NodeDto) o

        if (id != nodeDto.id) return false
        if (label != nodeDto.label) return false

        return true
    }

    int hashCode() {
        int result
        result = (int) (id ^ (id >>> 32))
        result = 31 * result + label.hashCode()
        return result
    }
}
