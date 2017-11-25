import React, { Component } from "react"
import Graph from 'react-graph-vis'
import apiFunc from '../../../api.jsx'
import { CaseGraphModel } from "../model/CaseGraph"
const api = apiFunc()

export const TYPE_UNKNOWN_MOTHER = "unknown_mother";
export const TYPE_UNKNOWN_FATHER = "unknown_father";
export const TYPE_SUBJECT = "subject";

const SELECTED_NODE_COLOR = "#f49b42";

export const CreateDefaultGraph = () => {
    const model = new CaseGraphModel();
    model.addNode(1, { label: "Bart Simpson", group: TYPE_SUBJECT });
    model.addNode(2, { label: 'Father', group: TYPE_UNKNOWN_FATHER });
    model.addNode(3, { label: 'Mother', group: TYPE_UNKNOWN_MOTHER });
    model.addEdge(1, 2, { label: "Father", tag: {}, font: {align: 'middle'} });
    model.addEdge(1, 3, { label: "Mother", tag: {}, font: {align: 'middle'} });
    return model;
}

const example_color = {
    background:'cyan',
    border:'blue',
    highlight:{
        background:'red',
        border:'blue'
    },
    hover:{
        background:'white',
        border:'red'
    }
};

const FA_ICON_NODE_STYLE = (code, color, selectedColor) => {
    return {
        shape: 'icon',
        icon: {
            face: 'FontAwesome',
            code: code,
            size: 50,
            color: color
            /*
            color: {
                background: color,
                border: color,
                highlight: {
                    background: selectedColor,
                    border: selectedColor
                }
            }
            */
        }
    }
}

const UNKNOWN_NODE_STYLE = () => {
    return FA_ICON_NODE_STYLE('\uf29c', '#b1c0d8', SELECTED_NODE_COLOR)
}

let options = {
    layout: {
        hierarchical: false
    },
    physics: {
        enabled: false
    },
    nodes: {
        size: 30,
        color: {
            border: '#222222',
            background: '#666666'
        }
    },
    edges: {
        selectionWidth: 1
    },
    groups: {
        unknown_father: UNKNOWN_NODE_STYLE(),
        unknown_mother: UNKNOWN_NODE_STYLE(),
        subject: FA_ICON_NODE_STYLE('\uf2be', '#56e02c', SELECTED_NODE_COLOR),
        family: FA_ICON_NODE_STYLE('\uf2bd', '#5fddb1', SELECTED_NODE_COLOR),
        person: FA_ICON_NODE_STYLE('\uf007', '#2844c1', SELECTED_NODE_COLOR)
    }
};

export default class CaseGraph extends Component {
    constructor(props) {
        super(props);
        this.events = {
            select: this.onSelect
        }
    }
    onSelect = (e) => {
        const { nodes, edges } = e;
        const { onNodeSelected, onEdgeSelected } = this.props;
        if (nodes && nodes.length == 1 && onNodeSelected) {
            onNodeSelected(nodes[0]);
        } else if (edges && edges.length == 1 && onEdgeSelected) {
            onEdgeSelected(edges[0]);
        }
    };
    /*
    clickHandler() {
        const { graph } = this.state;
        const nodes = Array.from(graph.nodes);
        this.counter = this.counter || 5;
        this.counter++; 
        if (Math.random() > 0.5) {
            nodes.pop();
            this.setState({graph: {...graph, nodes }});
        } else {
            this.setState({
                graph: {
                    ...graph,
                    nodes: [
                        {id: this.counter, label: `Node ${this.counter}`, color: '#41e0c9'},
                        ...nodes
                    ],
                    edges: [
                        {from: graph.nodes[Math.floor(Math.random()*graph.nodes.length)].id, to: this.counter},
                        ...graph.edges
                    ]
                }
            });
        }
    }*/
    componentDidMount() {
        /*
        api.getCaseGraph(this.props.caseId).then(r => {
            const newState = {
                ...this.state,
                ...{ graph: {
                    nodes: r.nodes.map(n => {
                        return { ...n, ...{ group: "person" } }
                    }),
                    edges: r.edges
                } }
            };
            this.setState(newState);
        });
        */
    }
    render() {
        const { width, height, graph, style } = this.props
        return <Graph graph={graph} options={options} events={this.events} style={style} />
    }
}