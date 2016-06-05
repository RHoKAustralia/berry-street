import React from 'react';
import API from '../api.js';

export default React.createClass({
  getInitialState() {
    return {
      ffCase: {},
      caseLoaded: false,
      newCase: true,
    };
  },

  componentDidMount() {
    if(this.props.params.caseId)
    {
      API.getCase(this.props.params.caseId, dbCase => {
        this.setState({ffCase: dbCase});
        this.setState({caseLoaded: true});
        this.setState({newCase: false});
      });
    }
    else
    {
      this.setState({caseLoaded: true});
    }
  },

  render() {
    
    var heading = <legend>New Case</legend>;
    if(!this.state.newCase)
      heading = <legend>Edit Case</legend>;
    
    return (
      <div>
      <fieldset>
        {heading}
      </fieldset>
      </div>

      );
  }
});

