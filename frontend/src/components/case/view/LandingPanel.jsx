import React, { Component } from 'react';

const Icon = ({ name }) => <i className={`fa fa-${name}`} />

export class LandingPanel extends Component {
    constructor(props) {
        super(props)
    }
    onClearPending = (e) => {
        const { onClearPending } = this.props;
        if (onClearPending) {
            onClearPending();
        }
    }
    render() {
        return <div className="container-fluid">
            <h1>Case View</h1>
            <hr />
            <p>Welcome to the Case View</p>
            <p>Here you can view your particular case and the entire graph of everyone related to your subject</p>
            {(() => {
                const { pendingNodes, pendingEdges } = this.props;
                if (pendingNodes > 0 || pendingEdges > 0) {
                    return <div className="alert alert-info">
                        <p>You have {pendingNodes} un-saved people and {pendingEdges} unsaved relationships. Make sure to save these changes.</p>
                        <button type="button" className="btn btn-danger" onClick={this.onClearPending}>Clear un-saved changes</button>
                    </div>
                }
            })()}
        </div>;
    }
}