import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import CaseTileGrid from './case/list/CaseTileGrid.jsx'
import apiFunc from '../api.jsx'

const api = apiFunc()

function mapStateToProps (state, ownProps) {
  return {
    profile: state.auth.profile
  }
}
function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

class CreateNewCaseTile extends Component {
  render () {
    return (
      <div className="btn">
        <button>
          <Link to='/cases/new/case' className="btn">
            <span>New Case</span>
          </Link>
        </button>
      </div>
    )
  }
}

class HomeScreen extends Component {
  constructor (props) {
    super(props)
      this.state = {
        cases: null,
        archivedCases: null,
        error: null
      }
  }
  componentDidMount () {
   api.getCases()
     .then(c =>
       api.getArchivedCases()
         .then(ac => this.setState(Object.assign({},this.state,{cases: c, archivedCases: ac})))
         .catch(err => this.setState({ error: err })))
     .catch(err => this.setState({ error: err }));
  }
  render () {
    const { profile } = this.props
    if (profile) {
      return <div className="portfolio container">
        <div className="page-header">
          <h1>Your Cases</h1>
        </div>
        <CaseTileGrid cases={this.state.cases}/>
        <CreateNewCaseTile />
        <div className="page-header">
            <h1><p>Archived Cases</p></h1>
        </div>
        <CaseTileGrid cases={this.state.archivedCases}/>
      </div>
    } else {
      return <div className="alert alert-info">
        <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
