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
    
    var heading = <h1>New Case</h1>;
    if(!this.state.newCase)
      heading = <h1>Edit Case</h1>;
    
    return (
      <div>
        {heading}
        <fieldset>
          <legend>
            Family First Details
          </legend>
          <div className="container">
          <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
              </div>
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Child Details
          </legend>
        </fieldset>
      </div>
      );
  }
});

