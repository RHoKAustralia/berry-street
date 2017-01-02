import React from 'react';
import './PersonRelationship.css';

const PersonRelationship = React.createClass({
  render() {
    return (
        <div className="PersonRelationship row">
        	<div className="PersonRelationship-riskStatus col-md-1"><span className={ 'glyphicon glyphicon-stop ' + 'PersonRelationship-risk' + this.props.riskStatus } aria-hidden="true"></span></div>
          <div className="col-md-8">
            <div className="PersonRelationship-personName">{this.props.personName}</div>
            <div className="PersonRelationship-relationship">{this.props.relationship}</div>
          </div>
        </div>
    );
  }
});

export default PersonRelationship;
