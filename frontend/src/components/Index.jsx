import React, { Component } from 'react'
import { connect } from 'react-redux'
import CaseTileGrid from "./CaseTileGrid.jsx"
import RelationshipDetails from './RelationshipDetails.jsx'

function mapStateToProps(state, ownProps) {
  return {
    profile: state.auth.profile
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { profile } = this.props;
    if (profile) {
      return <div className="portfolio container">
        <div className="page-header">
          <h1>My Cases</h1>
        </div>
        <CaseTileGrid />
        <RelationshipDetails personId={249} relationshipId={312} />
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
