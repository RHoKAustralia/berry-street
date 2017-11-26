import React, { Component } from "react"
import Graph from 'react-graph-vis'
import apiFunc from '../../../api.jsx'
import { CaseGraphModel, TYPE_SUBJECT, TYPE_UNKNOWN_FATHER, TYPE_UNKNOWN_MOTHER } from "../model/CaseGraph"
const api = apiFunc()

const SELECTED_NODE_COLOR = "#f49b42";

export const CreateDefaultGraph = () => {
    const model = new CaseGraphModel();
    model.addNode(-1, { label: "Name of Subject", group: TYPE_SUBJECT });
    model.addNode(-2, { label: 'Unknown Father', group: TYPE_UNKNOWN_FATHER });
    model.addNode(-3, { label: 'Unknown Mother', group: TYPE_UNKNOWN_MOTHER });
    model.addEdge(-1, -2, { label: "Father", tag: {}, font: {align: 'middle'} });
    model.addEdge(-1, -3, { label: "Mother", tag: {}, font: {align: 'middle'} });
    model.setTempIdSeed(-4);

    persistNewCase(model)
    return model;
}

//FIXME: omg then pyramid
const persistNewCase = (model) => {
  api.addCase({
    'familyFinderStaffName': 'Dolores',
    'caseManager': 'Jen',
    'dateOpened': '2017-11-26'
  }).then(caseResponse => {
    const caseId = caseResponse.id

    const subject = model.getNode(-1)
    subject.dateOfBirth = '1987-04-19'
    subject.displayName = subject.label
    api.addPersonForCase(caseId, subject).then(addSubjectResponse => {
      subject.id = addSubjectResponse.id
      api.updateSubject(caseId, subject)

      const father = model.getNode(-2)
      father.displayName = father.label
      api.addPersonForCase(caseId, father).then(fatherResponse => {
        father.id = fatherResponse.id

        const mother = model.getNode(-3)
        mother.displayName = mother.label
        api.addPersonForCase(caseId, mother).then(motherResponse => {
          mother.id = motherResponse.id

          api.addRelationship(caseId, subject, father, 'parent', father.label)
          api.addRelationship(caseId, subject, mother, 'parent', mother.label)
        })
      })
    })
  })
}

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
        hierarchical: {
            enabled:false,
            levelSeparation: 150,
            nodeSpacing: 150,
            treeSpacing: 200,
            blockShifting: true,
            edgeMinimization: false,
            parentCentralization: true,
            direction: 'UD',        // UD, DU, LR, RL
            sortMethod: 'hubsize'   // hubsize, directed
        }
    },
    physics: {
        enabled: true
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
        person: FA_ICON_NODE_STYLE('\uf007', '#2844c1', SELECTED_NODE_COLOR),
        add_person: FA_ICON_NODE_STYLE('\uf234', '#00ff00', SELECTED_NODE_COLOR)
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
        const { nodes } = e;
        const { onNodeSelected } = this.props;
        if (onNodeSelected) {
            if (nodes && nodes.length == 1) {
                onNodeSelected(nodes[0]);
            } else {
                onNodeSelected(null);
            }
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
