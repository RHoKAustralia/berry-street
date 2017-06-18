import React, { Component } from "react"
import Graph from 'react-graph-vis'
import apiFunc from '../../../api.jsx'
const api = apiFunc()

let options = {
    layout: {
        hierarchical: false
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
        subject: {
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf2be',
                size: 50,
                color: '#56e02c'
            }
        },
        family: {
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf2bd',
                size: 50,
                color: '#5fddb1'
            }
        },
        person: {
            shape: 'icon',
            icon: {
                face: 'FontAwesome',
                code: '\uf007',
                size: 50,
                color: '#2844c1'
            }
        }
    }
};

let events = {
    select: function (event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
}

export default class CaseGraph extends Component {
    constructor({ initialGraph }) {
        super();
        this.state = {
            graph: {
                nodes: [
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
            }
        };
    }/*
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
        const { graph } = this.state
        const { width, height } = this.props
        if (graph) {
            return (<div>
                <fieldset>
                    <legend>Relationship Graph</legend>
                    <Graph graph={graph} options={options} events={events} />
                </fieldset>
            </div>);
        } else {
            return <div className="alert alert-info">
                Preparing graph
            </div>
        }
    }
}