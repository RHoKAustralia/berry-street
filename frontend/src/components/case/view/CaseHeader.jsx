import React, { Component } from 'react'
import api from '../../../api.jsx'

class CaseHeader extends Component {

  exportEntities () {
    api.getEntities()
  }

  exportRelationships () {
    api.getRelationships()
  }

  render () {
    if (!this.props.case) return (<p>Case prop missing...</p>)
    const subject = this.props.case.subjects[0]
    return <div className="row page-header">
      <div className="col-xs-12 col-sm-6 col-md-9">
        <h1>{subject.person.givenNames} {subject.person.familyName}</h1>
        <p style={{'fontSize': '1.4em'}}><span style={{'color': 'rgba(199,196,196,1)'}}>Phase of Involvement:</span> {this.props.case.phaseOfInvolvement}</p>
        <div className="row">
            <button className="btn btn-default" style={{'marginLeft': '1em'}} onClick={this.exportEntities.bind(this)}>
              <img width={14} height={12} src="src/assets/images/data-export.png"/> Entities</button>
            <button className="btn btn-default" style={{'marginLeft': '1em'}} onClick={this.exportRelationships.bind(this)}>
              <img width={14} height={12} src="src/assets/images/data-export.png"/> Relationships</button>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3">
        <img src={subject.person.image || `src/assets/images/child_case_720.jpg`} className="pull-right" height="100px"/>
      </div>
    </div>
  }

}

export default CaseHeader
