import React , { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../actions.jsx'

function mapStateToProps(state, ownProps) {
  return {
    profile: state.auth.profile
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchProfile: () => dispatch(fetchProfile(ownProps.lock, ownProps.idToken))
  }
}

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    };
  }
  componentDidMount() {
    const { profile, fetchProfile } = this.props;
    if (!profile) {
      fetchProfile();
    }
  }
  render() {
    const { profile } = this.props;
    if (profile) {
      return (
        <div>
          <img width={50} height={50} src={profile.picture} />
        </div>
      );
    } else {
      return (
        <div>
        </div>);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)