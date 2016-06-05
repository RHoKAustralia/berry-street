import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      person: { 
        name: null, 
        address: null,
        phone: null,
        howFound: null, 
        allowContact: null, 
      },
      personLoaded: false,
      newPerson: true,
    };
  },

  componentDidMount() {
    if(this.props.params.personId)
    {
      this.setState({
        person: { 
          name: "David Smith", 
          address: "100 Main St, Townsville",
          phone: "(555)-6363636",
          howFound: "Facebook", 
          allowContact: true, 
      }});
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
  saveAndContinue(){
    
  },
  render() {
    
    var heading = <legend>New Person</legend>;
    if(!this.state.newPerson)
      heading = <legend>Edit Person</legend>;
    
    return (
      <div className="container">
        <fieldset>
          {heading}
        </fieldset>
        <legend>
           Person Details
         </legend>
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
                    <label for="personAllowContact">Continue Contact</label> 
                    <input type="checkbox" className="form-control"
                          ref="allowContact" id="personAllowContact" 
                          defaultValue={ this.state.person.allowContact } />
                </div>
              </div>
            </div>
            <div className="row">
              <button onClick={ this.saveAndContinue }>Save and Continue</button>              
            </div>
           </div>

      );
  }
});
