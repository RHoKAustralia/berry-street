import React, { Component } from "react"
import CaseGraph, {
    TYPE_UNKNOWN_MOTHER,
    TYPE_UNKNOWN_FATHER,
    TYPE_SUBJECT,
    TYPE_ADD_PERSON,
    CreateDefaultGraph
} from './view/CaseGraph.jsx'
import { CaseGraphModel } from "./model/CaseGraph"
import { NodeSelectionPanel } from "./view/NodeSelectionPanel.jsx"
import { EdgeSelectionPanel } from "./view/EdgeSelectionPanel.jsx"
import apiFunc from '../../api.jsx'

const api = apiFunc()

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
    onNodeSelected = (id) => {
        const node = id ? this.graphModel.getNode(id) : null;
        if (node) {
            switch (node.group) {
                case TYPE_ADD_PERSON:
                    this.setState({ selectedNode: node, selectedEdge: null });
                    break;
                default:
                    this.setState({ selectedNode: node, selectedEdge: null, graph: this.graphModel.prepareSelectedNode(id).toVis() });
                    break;
            }
        } else {
            this.setState({ selectedNode: null, selectedEdge: null, graph: this.graphModel.clearSelection().toVis() });
        }
    }
    onEdgeSelected = (edge) => {
        //this.setState({ selectedNode: null, selectedEdge: edge });
    }
    componentDidMount() {
        const { caseId } = this.props.params;
        if (caseId) {
            api.getCaseGraph(caseId).then(r => {
                const vis = {
                    nodes: r.nodes.map(n => {
                        return { ...n, ...{ group: "person" } }
                    }),
                    edges: r.edges
                };
                this.setState({
                    graph: this.graphModel.setFromVis(vis).toVis()
                });
            });
        } else {
            this.setState({
                graph: this.graphModel.toVis()
            });
        }
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
                               onNodeSelected={this.onNodeSelected} />
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
                                  onNodeSelected={this.onNodeSelected} />
            }
        }
    }
}