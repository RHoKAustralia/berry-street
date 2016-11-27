import React, { Component } from "react"
import api from "../api.jsx"

const TILE_WIDTH = 100;
const TILE_HEIGHT = 100;

class CaseHeader extends Component {
  render() {
    if (!this.props.case) return (<p>Case prop missing...</p>)
    return <div className="row page-header">
      <div className="col-xs-12 col-sm-6 col-md-9">
        <h1>{this.props.case.subjects[0].person.name}</h1>
        <p style={{'font-size': '1.4em'}}><span style={{'color': 'rgba(199,196,196,1)'}}>Phase of Involvement:</span> {this.props.case.phaseOfInvolvement}</p>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3">
        <img src={`http://lorempixel.com/${TILE_WIDTH}/${TILE_HEIGHT}/cats/1`} className="img-responsive pull-right" />
      </div>
    </div>
  }
}

export default CaseHeader
