import React from 'react';
import './PersonRelationship.css';

const PersonRelationship = React.createClass({
  render() {
    return (
        <div className="PersonRelationship">
            <div className="PersonRelationship-riskStatus">{this.props.riskStatus}</div>
            <div className="PersonRelationship-personName">{this.props.personName}</div>
            <div className="PersonRelationship-relationship">{this.props.relationship}</div>
        </div>
    );
  }
});

export default PersonRelationship;
