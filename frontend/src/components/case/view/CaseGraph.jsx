import React, { Component } from "react"
import Graph from 'react-graph-vis'

let options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    }
};

let events = {
    select: function(event) {
        var { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
}

export default class CaseGraph extends Component {
    constructor({initialGraph}) {
        super();
        this.state = {
            graph: {
                nodes: [
                    {id: 1, label: 'Node 1', color: '#e04141'},
                    {id: 2, label: 'Node 2', color: '#e09c41'},
                    {id: 3, label: 'Node 3', color: '#e0df41'},
                    {id: 4, label: 'Node 4', color: '#7be041'},
                    {id: 5, label: 'Node 5', color: '#41e0c9'}
                ],
                edges: [
                    {from: 1, to: 2},
                    {from: 1, to: 3},
                    {from: 2, to: 4},
                    {from: 2, to: 5}
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
    render() {
        return (<div>
            <fieldset>
                <legend>Relationship Graph</legend>
                <Graph graph={this.state.graph} options={options} events={events} />
            </fieldset>
        </div>);
    }
}