import React, { Component } from 'react'
import apiFunc from '../../../api.jsx'
import { CaseWorkerCard } from './CaseWorkerCard.jsx'
import { SubjectCard } from './SubjectCard.jsx'
import { FamilyList } from '../list/FamilyList.jsx'

const api = apiFunc()

class CaseView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ffCase: null,
      error: null
    }
  }

  componentDidMount () {
    this.reloadCase()
  }

  reloadCase () {
    api.getCase(this.props.params.caseId)
      .then(result => {
        this.setState(Object.assign({}, this.state, { ffCase: result }))
      })
      .catch(err => this.setState({ error: err }))
  }
  render () {
    const { ffCase } = this.state
    if (!ffCase) {
      return <p>Loading...</p>
    } else {
      const subject = ffCase.subjects[0];
      return <div>
        <SubjectCard dob={subject.person.dateOfBirth} address={subject.person.contactInformation} />
        <CaseWorkerCard />
        <FamilyList />
      </div>
    }
  }
}

export default CaseView
