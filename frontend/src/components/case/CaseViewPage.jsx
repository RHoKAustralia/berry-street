import React, { Component } from "react"
import CaseGraph, {
    TYPE_UNKNOWN_MOTHER,
    TYPE_UNKNOWN_FATHER,
    TYPE_SUBJECT,
    CreateDefaultGraph
} from './view/CaseGraph.jsx'
import { CaseGraphModel } from "./model/CaseGraph"
import { NodeSelectionPanel } from "./view/NodeSelectionPanel.jsx"
import { EdgeSelectionPanel } from "./view/EdgeSelectionPanel.jsx"

export default class CaseViewPage extends Component {
    constructor(props) {
        super(props)
        this.graphModel = CreateDefaultGraph();
        this.state = {
            graph: null,
            error: null,
            selectedNode: null,
            selectedEdge: null
        }
    }
    onNodeSelected = (node) => {
        this.setState({ selectedNode: this.graphModel.getNode(node), selectedEdge: null });
    }
    onEdgeSelected = (edge) => {
        //this.setState({ selectedNode: null, selectedEdge: edge });
    }
    componentDidMount() {
        this.setState({
            graph: this.graphModel.toVis()
        });
    }
    render() {
        const { graph, error } = this.state
        if (error) {
            return <div className="container-fluid">
                <div className="alert alert-danger">Error: {error.message}</div>
            </div>
        } else if (!graph) {
            return <div className="container-fluid">
                <div className="alert alert-info">Loading...</div>
            </div>
        } else {
            const { selectedNode, selectedEdge } = this.state;
            if (selectedNode || selectedEdge) {
                const TOP_OFFSET = 55;
                const PANEL_WIDTH = "50%";
                const style = { position: "absolute", left: 0, right: PANEL_WIDTH, top: TOP_OFFSET, bottom: 0 };
                const panelStyle = { position: "absolute", right: 0, top: TOP_OFFSET, bottom: 0, width: PANEL_WIDTH }
                return <div>
                    <CaseGraph graph={graph}
                               style={style}
                               onNodeSelected={this.onNodeSelected}
                               onEdgeSelected={this.onEdgeSelected} />
                    <div style={panelStyle}>
                        {(() => {
                            if (selectedNode) {
                                return <NodeSelectionPanel node={selectedNode} />
                            } else if (selectedEdge) {
                                return <EdgeSelectionPanel edge={selectedEdge} />
                            }
                        })()}
                    </div>
                </div>
            } else {
                const style = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
                return <CaseGraph graph={graph}
                                  style={style}
                                  onNodeSelected={this.onNodeSelected}
                                  onEdgeSelected={this.onEdgeSelected} />
            }
        }
    }
}