import React, { Component } from "react";
import SubjectEdit from './SubjectEdit.jsx'

export class NodeSelectionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { node } = this.props;
        return <SubjectEdit subject={node} />
    }
}
