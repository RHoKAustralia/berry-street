import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPerson } from '../actions.jsx'

class ViewPerson extends Component {

  componentWillMount() {
    this.props.dispatch(fetchPerson(this.props.params.id))
  }

  render() {
    const person = this.props.person || {}
    return (
      <div className="container">
        <div className="page-header">
          <h1>Person <small> ID: {person.id}</small></h1>
        </div>
        <span>
          <h4>Name: </h4> {person.name}
        </span>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    person: state.people.selectedPerson
  }
})(ViewPerson)