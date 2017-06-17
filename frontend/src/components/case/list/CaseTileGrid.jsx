import React, { Component } from 'react'
import { Link } from 'react-router'
import apiFunc from '../../../api.jsx'

const api = apiFunc()

const TILE_WIDTH = 250
const TILE_HEIGHT = 400
const TILE_VERT_MARGIN = 30

class CreateNewCaseTile extends Component {
  render () {
    return (
      <div className="col-md-3">
        <div className="work nopad">
          <Link to='/cases/new/child' style={{ width: TILE_WIDTH }} className="rlisting">
            <img src="src/assets/images/add_child_case_720.jpg" className="img-responsive" />
            <h3>New Case<br />&nbsp;</h3>
            <h4>&nbsp;</h4>
          </Link>
        </div>
      </div>
    )
  }
}

class CaseTile extends Component {
  render () {
    const { subjects } = this.props.case
    let person = subjects.length > 0 && subjects[0] ? subjects[0].person : null
    if (!person) {
      person = {
        image: `src/assets/images/child_case_720.jpg`,
        givenNames: 'Unknown',
        familyName: 'Unknown'
      }
    }
    return (
      <div className="col-md-3">
        <div className="work nopad">
          <Link to={`/cases/${this.props.case.id}`} className="rlisting">
              <img src={person.image || `src/assets/images/child_case_720.jpg`} className="img-responsive" />
              <h3>{`${person.familyName}`}<br />{`${person.givenNames}`}</h3>
                <h4>{this.props.case.phaseOfInvolvement}</h4>
          </Link>
        </div>
      </div>
    )
  }
}

class CaseTileGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      summary: null,
      error: null
    }
  }
  componentDidMount () {
    api.getCases()
       .then(r => this.setState({ summary: r }))
       .catch(err => this.setState({ error: err }))
  }
  render () {
    const { summary, error } = this.state
    if (summary) {
      return (
        <div className="row">
          <CreateNewCaseTile />
          {summary.map((item) => <CaseTile key={item.id} case={item} />)}
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
