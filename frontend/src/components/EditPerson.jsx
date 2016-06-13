import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      person: {
        name: null,
        address: null,
        phone: null,
        howFound: null,
        allowContact: false,
      },
      personLoaded: false,
      newPerson: true,
    };
  },

  componentDidMount() {
    if (this.props.params.personId) {
      this.setState({
        person: {
          name: "David Smith",
          address: "100 Main St, Townsville",
          phone: "(555)-6363636",
          howFound: "Facebook",
          allowContact: true,
        }
      });
      this.setState({ personLoaded: true });
      this.setState({ newPerson: false });
      /*
      API.getCase(this.props.params.personId, dbCase => {
        this.setState({ffCase: dbCase});
        this.setState({caseLoaded: true});
        this.setState({newCase: false});
      });
      */
    }
    else {
      this.setState({ personLoaded: true });
    }
  },
  saveAndContinue() {

  },
  updateName(event) {
    var person = this.state.person;
    person.name = event.target.value;
    this.setState({ person: person });
  },
  updateAddress(event) {
    var person = this.state.person;
    person.address = event.target.value;
    this.setState({ person: person });
  },
  updatePhone(event) {
    var person = this.state.person;
    person.phone = event.target.value;
    this.setState({ person: person });
  },
  updateHowFound(event) {
    var person = this.state.person;
    person.howFound = event.target.value;
    this.setState({ person: person });
  },
  updateAllowContact(event) {
    var person = this.state.person;
    person.allowContact = event.target.value;
    this.setState({ person: person });
  },
  render() {

    var heading = <legend>New Person</legend>;
    if (!this.state.newPerson)
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
                value={ this.state.person.name } onChange={this.updateName} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="personAddress">Address</label>
              <input type="text" className="form-control"
                ref="address" id="personAddress" placeholder="Primary Address"
                value={ this.state.person.address } onChange={this.updateAddress} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="personPhone">Phone</label>
              <input type="text" className="form-control"
                ref="phone" id="personPhone" placeholder="Primary Phone"
                value={ this.state.person.phone } onChange={this.updatePhone} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="personHowFound">How Found</label>
              <input type="text" className="form-control"
                ref="address" id="personHowFound" placeholder="How was the person found"
                value={ this.state.person.howFound } onChange={this.updateAddress} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="personAllowContact">Continue Contact</label>
              <input type="checkbox" className="form-control"
                ref="allowContact" id="personAllowContact"
                value={ this.state.person.allowContact } onChange={this.updateAllowContact}/>
            </div>
          </div>
        </div>
        <div className="row">
          <button onClick={ this.saveAndContinue } className="btn btn-primary">Save and Continue</button>
        </div>
      </div>

    );
  }
});
