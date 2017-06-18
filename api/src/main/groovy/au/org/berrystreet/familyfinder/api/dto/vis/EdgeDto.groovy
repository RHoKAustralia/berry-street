package au.org.berrystreet.familyfinder.api.dto.vis

class EdgeDto {
    private long from
    private long to
    private String label

    EdgeDto(long from, long to, String label) {
        this.from = from
        this.to = to
        this.label = label
    }

    long getFrom() {
        return from
    }

    long getTo() {
        return to
    }

    String getLabel() {
        return label
    }

    boolean equals(o) {
        if (this.is(o)) return true
        if (getClass() != o.class) return false

        EdgeDto edgeDto = (EdgeDto) o

        if (from != edgeDto.from) return false
        if (to != edgeDto.to) return false
        if (label != edgeDto.label) return false

        return true
    }

    int hashCode() {
        int result
        result = (int) (from ^ (from >>> 32))
        result = 31 * result + (int) (to ^ (to >>> 32))
        result = 31 * result + label.hashCode()
        return result
    }
}
