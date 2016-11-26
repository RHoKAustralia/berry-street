import React, { Component } from 'react'
import { connect } from 'react-redux'
//import CaseList from "./CaseList.jsx"
import CaseTileGrid from "./CaseTileGrid.jsx"

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
      return <div className="container-fluid">
        <div className="alert alert-info">Welcome <strong>{profile.nickname}</strong></div>
        <CaseTileGrid />
      </div>
    } else {
      return <div>Loading ...</div>
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
