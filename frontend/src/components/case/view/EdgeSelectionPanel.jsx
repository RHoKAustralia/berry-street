import React, { Component } from "react";

export class EdgeSelectionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { edge } = this.props;
        return <pre>{JSON.stringify(edge)}</pre>;
    }
}