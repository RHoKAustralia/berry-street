import React, { Component } from "react"
import {TextInput} from '../../common/Input.jsx'

class SubjectEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {...props.subject}
  }

  render() {
    return (<div className="form-horizontal">
      <form>
        <div className="form-group">
          <label htmlFor="givenNames">Name</label>
          <div className="row">
            <div className="col-md-6">
              <TextInput name="givenNames" value={this.state.givenNames} onStateChange={c => this.setState(c)} />
            </div>
            <div className="col-md-6">
              <TextInput name="familyName" value={this.state.familyName} onStateChange={c => this.setState(c)} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth</label>
          <TextInput name="dateOfBirth" value={this.state.dateOfBirth} onStateChange={c => this.setState(c)} />
        </div>
        <div className="form-group">
          <label htmlFor="carerName">Carer's name</label>
          <TextInput name="carerName" value={this.state.carerName} onStateChange={c => this.setState(c)} />
        </div>
        <div className="form-group">
          <label htmlFor="carerAddress">Carer's address</label>
          <TextInput name="carerAddress" value={this.state.carerAddress} onStateChange={c => this.setState(c)} />
        </div>
        <div className="form-group">
          <label htmlFor="atsi">Aboriginal or Torres Strait Islander</label>
          <select id="atsi" className="form-control" value={this.state.atsi || ''}>
            <option value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="atsiLocation">Mob or location</label>
          <TextInput name="atsiLocation" value={this.state.atsiLocation} onStateChange={c => this.setState(c)} />
        </div>
      </form>
    </div>)
  }
}

export default SubjectEdit
