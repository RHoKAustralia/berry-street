import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router'
import api from '../api.jsx'
import { childAdded } from '../actions.jsx'

class AddChild extends Component {
  constructor (props) {
    super(props)
    this.state = {
      placementTypes: []
    }
  }
  componentDidMount () {
    api.getPlacementTypes().then(r => this.setState({ placementTypes: r }))
  }

  addChild(childToAdd) {
    this.props.dispatch(childAdded(childToAdd))
    this.props.router.push('/cases/new/case')
  }

  render () {
    const {fields: {firstName, surname, dob, currentPlacement, address, phone, email}, handleSubmit} = this.props
    const placementTypes = this.state.placementTypes
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.addChild.bind(this))}>
          <h1>New Case</h1>
          <div>
            <fieldset>
              <legend>
                Child Details
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" {...firstName} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" className="form-control" id="surname" {...surname} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="text" className="form-control" id="dob" {...dob} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="currentPlacement">Placement Type</label>
                    {(() => {
                      if (placementTypes) {
                        return <select className="form-control" id="currentPlacement" placeholder="Status" {...currentPlacement}>
                        <option></option>
                        {placementTypes.map((st, i) => <option key={i}>{st}</option>)}
                        </select>
                      } else {
                        return <div className="alert alert-info">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                        </div>
                      }
                    })()}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" {...address} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" {...phone} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" {...email} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  &nbsp;
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary pull-right">Add Case Details</button>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  fields: ['firstName', 'surname', 'dob', 'currentPlacement', 'address', 'phone', 'email'],
  form: 'addChild'
},
  state => ({

  })
)(withRouter(AddChild))
