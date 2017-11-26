export const TYPE_UNKNOWN_MOTHER = "unknown_mother";
export const TYPE_UNKNOWN_FATHER = "unknown_father";
export const TYPE_SUBJECT = "subject";
export const TYPE_PERSON = "person";
export const TYPE_ADD_PERSON = "add_person";

export class CaseGraphModel {
    constructor() {
        this.nodes = {};
        this.edges = [];
        this.tempEdges = [];
        this.tempNodes = [];
        this.tempNodeIdCounter = -1;
    }
    addNode(id, data) {
        this.nodes[id] = data;
    }
    addEdge(from, to, data) {
        this.edges.push({ from: from, to: to, ...data });
    }
    getNode(id) {
        return this.nodes[id] || this.tempNodes[id];
    }
    reset() {
        this.clearSelection();
        this.nodes = {};
        this.edges = [];
        return this;
    }
    clearSelection() {
        this.tempEdges = [];
        this.tempNodes = {};
        this.tempNodeIdCounter = -1;
        return this;
    }
    prepareSelectedNode(id) {
        this.tempEdges = [];
        this.tempNodes = {};
        const tid = this.tempNodeIdCounter--;
        /*
        this.tempNodes[tid] = { id: tid, label: "Add Person", group: "add_person" };
        this.tempEdges.push({ from: id, to: tid });
        */
        return this;
    }
    setFromVis(vis) {
        this.nodes = {};
        this.edges = [];
        this.tempEdges = [];
        this.tempNodes = {};
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
        const tkeys = Object.keys(this.tempNodes);
        for (const k of tkeys) {
            n.push({ id: k, ...this.tempNodes[k] });
        }
        return {
            nodes: n,
            edges: [ ...this.edges, ...this.tempEdges ]
        }
    }
}