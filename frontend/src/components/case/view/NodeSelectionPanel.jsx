import React, { Component } from "react";
import CaseGraph, {
    CreateDefaultGraph
} from './CaseGraph.jsx'
import {
    TYPE_ADD_PERSON,
    TYPE_UNKNOWN_MOTHER,
    TYPE_UNKNOWN_FATHER,
    TYPE_SUBJECT
} from '../model/CaseGraph'

const Icon = ({ group }) => {
    switch (group) {
        case TYPE_UNKNOWN_FATHER:
        case TYPE_UNKNOWN_MOTHER:
            return <i className="fa fa-question" />;
        default:
            return <i className="fa fa-user" />;
    }
}
const FaIcon = ({ name }) => <i className={`fa fa-${name}`} />
import SubjectEdit from './SubjectEdit.jsx'

export class NodeSelectionPanel extends Component {
    constructor(props) {
        super(props);
    }
    onAddPerson = (e) => {
        const { onAddPerson, node } = this.props;
        if (onAddPerson) {
            const type = e.target.getAttribute("data-person-type");
            onAddPerson(node.id, type);
        }
    }
    render() {
        const { node } = this.props;
        return <div className="container-fluid">
            <h1><Icon group={node.group} /> {node.label}</h1>
            <hr />
            <SubjectEdit subject={node} />
            {(() => {
                if (node.group != TYPE_ADD_PERSON) {
                    return <fieldset>
                        <legend>Other Options</legend>
                        <div className="btn-group btn-group-justified" role="group" aria-label="...">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default" data-person-type={TYPE_ADD_PERSON} onClick={this.onAddPerson}><FaIcon name="plus" /> Add Person</button>
                            </div>
                        </div>
                    </fieldset>;
                }
            })()}
        </div>;
    }
}
