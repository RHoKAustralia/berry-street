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
    setFromVis(vis) {
        this.nodes = {};
        this.edges = [];
        const { nodes, edges } = vis;
        for (const n of nodes) {
            this.nodes[n.id] = n;
        }
        for (const e of edges) {
            this.edges.push(e);
        }
        return this;
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