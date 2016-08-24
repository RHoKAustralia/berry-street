import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCase } from '../actions.jsx'

class ViewCase extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCase(this.props.params.caseId))
  }

  render() {
    const ffCase = this.props.ffCase || {}
    return (
      <div className="container">
        <div className="page-header">
          <h1>Case <small> ID: {ffCase.caseId}</small></h1>
        </div>
        <span>
          <h4>Staff Member Name: </h4> {ffCase.staffName}
          <h4>Child Name: </h4> {ffCase.childName}
        </span>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    ffCase: state.cases.selectedCase
  }
})(ViewCase)