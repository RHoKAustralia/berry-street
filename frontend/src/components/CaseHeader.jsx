import React, { Component } from "react"
import api from "../api.jsx"

const TILE_WIDTH = 100;
const TILE_HEIGHT = 100;

class CaseHeader extends Component {
  render() {
    if (!this.props.case) return (<p>Case prop missing...</p>)
    const subject = this.props.case.subjects[0];
    return <div className="row page-header">
      <div className="col-xs-12 col-sm-6 col-md-9">
        <h1>{subject.person.name}</h1>
        <p style={{'fontSize': '1.4em'}}><span style={{'color': 'rgba(199,196,196,1)'}}>Phase of Involvement:</span> {this.props.case.phaseOfInvolvement}</p>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3">
        <img src={subject.person.image || `src/assets/images/child_case_720.jpg`} className="img-responsive pull-right" />
      </div>
    </div>
  }
}

export default CaseHeader
