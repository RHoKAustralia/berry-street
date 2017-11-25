import React, { Component } from "react";
import CaseGraph, {
    TYPE_UNKNOWN_MOTHER,
    TYPE_UNKNOWN_FATHER,
    TYPE_SUBJECT,
    CreateDefaultGraph
} from './CaseGraph.jsx'

const Icon = ({ group }) => {
    switch (group) {
        case TYPE_UNKNOWN_FATHER:
        case TYPE_UNKNOWN_MOTHER:
            return <i className="fa fa-question" />;
        default:
            return <i className="fa fa-user" />;
    }
}

export class NodeSelectionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { node } = this.props;
        return <div className="container-fluid">
            <h1><Icon group={node.group} /> {node.label}</h1>
            <hr />
            <p>Some form goes here</p>
        </div>;
    }
}