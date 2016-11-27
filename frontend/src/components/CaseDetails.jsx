import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCase } from '../actions.jsx'
import { selectCaseById } from '../reducers.jsx'
import api from "../api.jsx"
import CaseHeader from './CaseHeader.jsx'

class CaseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ffCase: null,
      error: null,
    };
  }

  componentDidMount() {
    api.getCases()
       .then(r => {
         let ccase = r.find(cc => { return this.props.params.caseId == cc.id})
         this.setState({ ffCase: ccase })
        })
       .catch(err => this.setState({ error: err }));
  }

  render() {
    const { ffCase, error } = this.state;
    if (!ffCase) return this.renderLoading()
    return (
      <div className="container">
        <CaseHeader />
      </div>
    )
  }

  renderLoading() {
      return (<p>Loading...</p>)
  }
}

export default CaseDetails
