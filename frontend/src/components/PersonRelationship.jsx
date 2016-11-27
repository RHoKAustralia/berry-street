import React from 'react';
import './PersonRelationship.css';

const PersonRelationship = React.createClass({
  render() {
    return (
        <div className="PersonRelationship">

        	<div className="PersonRelationship-riskStatus"><span className={ "glyphicon glyphicon-stop " + this.props.riskStatus } aria-hidden="true"></span></div>
            <div className="PersonRelationship-personName">{this.props.personName}</div>
            <div className="PersonRelationship-relationship">{this.props.relationship}</div>
        </div>
    );
  }
});

export default PersonRelationship;
