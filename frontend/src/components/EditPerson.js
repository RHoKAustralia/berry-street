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
        <label>Name</label> 
        <input type="text"
              ref="name"
              defaultValue={ this.state.person.name } />
        <label>Address</label> 
        <input type="text"
              ref="address"
              defaultValue={ this.state.person.address } />
        <label>Phone</label> 
        <input type="text"
              ref="phone"
              defaultValue={ this.state.person.phone } />
        <label>Do Not Contact</label> 
        <input type="checkbox"
              ref="doNotContact"
              defaultValue={ this.state.person.doNotContact } />
      </div>

      );
  }
});
