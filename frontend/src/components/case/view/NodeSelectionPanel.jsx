import React, { Component } from "react";

export class NodeSelectionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { node } = this.props;
        return <pre>{JSON.stringify(node)}</pre>;
    }
}