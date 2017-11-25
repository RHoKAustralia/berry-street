import React, { Component } from 'react'
import apiFunc from '../../../api.jsx'
import { CaseWorkerCard } from './CaseWorkerCard.jsx'
import { SubjectCard } from './SubjectCard.jsx'
import { FamilyList } from '../list/FamilyList.jsx'
import CaseGraph from './CaseGraph.jsx'

const api = apiFunc()

class CaseView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ffCase: null,
      error: null
    }
  }

  componentDidMount() {
    this.reloadCase()
  }

  reloadCase() {
    api.getCase(this.props.params.caseId)
      .then(result => {
        this.setState(Object.assign({}, this.state, { ffCase: result }))
      })
      .catch(err => this.setState({ error: err }))
  }
  render() {
    const { ffCase, error } = this.state
    if (error) {
      return <div className="container-fluid">
        <div className="alert alert-danger">Error: {error.message}</div>
      </div>
    } else if (!ffCase) {
      return <div className="container-fluid">
        <div className="alert alert-info">Loading...</div>
      </div>
    } else {
      const { subject } = ffCase
      return <div className="container-fluid">
        <CaseGraph caseId={ffCase.id} />
      </div>
    }
  }
}

export default CaseView
