import React, { Component } from 'react'
import { Link } from 'react-router'

class CaseTile extends Component {
  render () {
    const { subject } = this.props.case
    let person = subject
    if (!person) {
      person = {
        image: `src/assets/images/child_case_720.jpg`,
        givenNames: 'Unknown',
        familyName: 'Unknown'
      }
    }
    return (
      <div className="work">
        <div className="col-md-6">
          <Link to={`/cases/${this.props.case.id}`}>
            {subject.displayName}
          </Link>
        </div>
        <div className="col-md-3">
          8 people
        </div>
        <div className="col-md-3">
          12 days left
        </div>
      </div>
    )
  }
}

class CaseTileGrid extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const summary = this.props.cases
    if (summary) {
      return (
        <div>
          {summary.map((item) => <CaseTile key={item.id} case={item}/>)}
        </div>
      )
    } else {
      return (
        <div className="alert alert-info">
          <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
  }
}

export default CaseTileGrid
