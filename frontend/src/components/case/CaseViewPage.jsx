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
import { LandingPanel } from "./view/LandingPanel.jsx"
import apiFunc from '../../api.jsx'

const api = apiFunc()

export default class CaseViewPage extends Component {
    constructor(props) {
        super(props)
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
    setupGraph(caseId) {
        this.graphModel = CreateDefaultGraph();
        if (caseId) {
            api.getCaseGraph(caseId).then(r => {
                this.setState({
                    graph: this.graphModel.reset().setFromVis(r).toVis()
                });
            });
        } else {
            this.setState({
                graph: this.graphModel.toVis()
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        const { caseId } = this.props.params;
        const nextCaseId = nextProps.params.caseId;
        if (caseId != nextCaseId) {
            this.setupGraph(nextCaseId);
        }
    }
    componentDidMount() {
        const { caseId } = this.props.params;
        this.setupGraph(caseId);
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
            const TOP_OFFSET = 55;
            const PANEL_WIDTH = "50%";
            const style = { position: "absolute", left: 0, right: PANEL_WIDTH, top: TOP_OFFSET, bottom: 0 };
            const panelStyle = { position: "absolute", right: 0, top: TOP_OFFSET, bottom: 0, width: PANEL_WIDTH, overflowY: "auto" };
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
                        } else {
                            return <LandingPanel />
                        }
                    })()}
                </div>
            </div>;
        }
    }
}
