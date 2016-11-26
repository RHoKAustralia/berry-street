import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state, ownProps) {
  return {
    profile: state.auth.profile
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return { }
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { profile } = this.props;
    if (profile) {
      return <div className="alert alert-info">Welcome <strong>{profile.nickname}</strong></div>
    } else {
      return <div>Loading ...</div>
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
