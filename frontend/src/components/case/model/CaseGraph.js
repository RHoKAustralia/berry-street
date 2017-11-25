export class CaseGraphModel {
    constructor() {
        this.nodes = {};
        this.edges = [];
    }
    addNode(id, data) {
        this.nodes[id] = data;
    }
    addEdge(from, to, data) {
        this.edges.push({ from: from, to: to, ...data });
    }
    getNode(id) {
        return this.nodes[id];
    }
    toVis() {
        const n = [];
        const keys = Object.keys(this.nodes);
        for (const k of keys) {
            n.push({ id: k, ...this.nodes[k] })
        }
        return {
            nodes: n,
            edges: [ ...this.edges ]
        }
    }
}