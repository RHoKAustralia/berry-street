package au.org.berrystreet.familyfinder.api.service.vis.dto

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
}
