import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

const PersonList = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Existing People <small><Link to='/people/new'>Add New Person</Link></small></h1>
        </div>
        <fieldset>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Person Number</th>
                <th> Name</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.props.people.map(person =>
                  <PersonRow key={person.id} id={person.id} name={person.name} />
              )}
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
});

var PersonRow = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td><PersonViewLink id={this.props.id} /></td>
        <td><PersonEditLink id={this.props.id} /></td>
      </tr>
    );
  }
});

var PersonViewLink = React.createClass({
  render() {
    return (
      <Link to={'/people/' + this.props.id}>View</Link>
    );
  }
});

var PersonEditLink = React.createClass({
  render() {
    return (
      <Link to={'/people/' + this.props.id + '/edit'}>Edit</Link>
    );
  }
});

export default connect((state) => {
  return {
    people: state.people
  }
})(PersonList)


