import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCase } from '../actions.jsx'
import { selectCaseById } from '../reducers.jsx'

class ViewCase extends Component {

  componentWillMount() {
    this.props.dispatch(selectCase(this.props.params.caseId))
  }

  render() {
    if (!this.props.ffCase) return this.renderLoading()
    const ffCase = this.props.ffCase || {}
    return (
      <div className="container">
        <div className="page-header">
          <h1>Case <small> ID: {ffCase.id}</small></h1>
        </div>
        <span>
          <h4>Staff Member Name: </h4> {ffCase.staffName}
          <h4>Child Name: </h4> {ffCase.childName}
        </span>
      </div>
    )
  }

  renderLoading() {
      return (<p>Loading...</p>)
  }
}

export default connect((state) => {
  return {
    ffCase: state.selectedCase != null ? selectCaseById(state, state.selectedCase) : {}
  }
})(ViewCase)
