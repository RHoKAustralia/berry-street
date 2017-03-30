import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class PersonForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initVals: props.initVals || {}
    }
  }

  render () {
    const {
      fields: {
        familyName,
        givenNames,
        atsi,
        atsiLocation,
        dateOfBirth,
        address,
        phone,
        email
      },
      handleSubmit
    } = this.props

    return <form onSubmit={handleSubmit(this)}>
      {/* TODO: We can probably interrogate redux-form for dirty state to conditionally show the below warning */}
      <div className="alert alert-warning">
        <strong><i className="fa fa-warning"/> Be sure to save any changes before selecting a different person</strong>
      </div>
      <fieldset>
        <legend>Personal Details</legend>
        <div className="row">
          <div className="col-xs-6 form-group">
            <label htmlFor="familyName">Family Name</label>
            <input id="familyName" type="text" className="form-control" {...familyName} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="givenNames">Given Names</label>
            <input id="givenNames" type="text" className="form-control" {...givenNames} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            {/* TODO: Hook this up to a date picker component (eg. react-widgets DatePicker) */}
            <input id="dateOfBirth" type="text" className="form-control" {...dateOfBirth} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="address">Address</label>
            <input id="address" type="text" className="form-control" {...address} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" className="form-control" {...phone} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="form-control" {...email} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="atsi">ATSI</label>
            <input id="atsi" type="checkbox" {...atsi} style={{'margin-left': '15px'}} />
          </div>
          <div className="col-xs-6 form-group">
            <label htmlFor="atsiLocation">ATSI mob or location</label>
            <input id="atsiLocation" type="text" className="form-control" {...atsiLocation} />
          </div>
        </div>
      </fieldset>
    </form>
  }
}

const PersonFormWrapper = reduxForm(
  {
    fields: [
      'familyName',
      'givenNames',
      'atsi',
      'atsiLocation',
      'dateOfBirth',
      'address',
      'phone',
      'email'
    ],
    form: 'relatedPerson' // a unique name for this form
  },
  (state, ownProps) => ({
    initialValues: ownProps.person
  })
)(PersonForm)

export default PersonFormWrapper
