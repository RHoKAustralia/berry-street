import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      person: { 
        name: null, 
        address: null,
        phone: null,
        howFound: null, 
        doNotContact: null, 
      },
      personLoaded: false,
      newPerson: true,
    };
  },

  componentDidMount() {
    if(this.props.params.personId)
    {
      /*
      API.getCase(this.props.params.personId, dbCase => {
        this.setState({ffCase: dbCase});
        this.setState({caseLoaded: true});
        this.setState({newCase: false});
      });
      */
    }
    else
    {
      this.setState({personLoaded: true});
    }
  },

  render() {
    
    var heading = <legend>New Person</legend>;
    if(!this.state.newPerson)
      heading = <legend>Edit Person</legend>;
    
    return (
      <div>
        <fieldset>
          {heading}
        </fieldset>
        <legend>
           Person Details
         </legend>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="personName">Name</label> 
                  <input type="text" className="form-control"
                        ref="name" id="personName" placeholder="Name"
                        defaultValue={ this.state.person.name } />
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="personAddress">Address</label> 
                    <input type="text" className="form-control"
                            ref="address" id="personAddress" placeholder="Primary Address"
                            defaultValue={ this.state.person.address } />
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="personPhone">Phone</label> 
                    <input type="text" className="form-control"
                          ref="phone" id="personPhone" placeholder="Primary Phone"
                          defaultValue={ this.state.person.phone } />
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="personDNC">Do Not Contact</label> 
                    <input type="checkbox" className="form-control"
                          ref="doNotContact" id="personDNC" 
                          defaultValue={ this.state.person.doNotContact } />
                </div>
              </div>
            </div>
           </div>
         </div>

      );
  }
});
