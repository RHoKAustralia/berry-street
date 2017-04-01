import React from 'react'
import './CaseRelationship.css'

const CaseRelationship = React.createClass({
  render () {
    return (
        <div className="CaseRelationship row">
          <div className="CaseRelationship-riskStatus col-md-1"><span className={ 'glyphicon glyphicon-stop ' + 'CaseRelationship-risk-' + this.props.riskStatus } aria-hidden="true"></span></div>
          <div className="col-md-8">
            <div className="CaseRelationship-personName">{this.props.personName}</div>
            <div className="CaseRelationship-relationship">{this.props.relationship}</div>
          </div>
        </div>
    )
  }
})

export default CaseRelationship
