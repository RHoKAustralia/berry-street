import React, { Component } from 'react'
import { Link } from 'react-router'

class CaseTile extends Component {
  render () {
    const subjects = this.props.case.subjects || []
    let person = subjects.length > 0 && subjects[0] ? subjects[0].person : null
    if (!person) {
      person = {
        image: `src/assets/images/child_case_720.jpg`,
        givenNames: 'Unknown',
        familyName: 'Unknown'
      }
    }
    return (
      <div className="work">
        <div className="col-md-2">
          <Link to={`/cases/${this.props.case.id}`}>
            {`${person.givenNames} ${person.familyName}`}
          </Link>
        </div>
        <div className="col-md-2">
          people
        </div>
        <div className="col-md-2">
          days left
        </div>
        <div className="col-md-2">
          <Link to={`/cases/${this.props.case.id}`}>
            view
          </Link>
        </div>
        <div className="col-md-2">
          <Link to={`/cases/${this.props.case.id}`}>
            graph
          </Link>
        </div>
        <div className="col-md-2">
          <Link to={`/cases/${this.props.case.id}`}>
            edit
          </Link>
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
