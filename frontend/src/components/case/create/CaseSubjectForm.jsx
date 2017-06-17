import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router'
import apiFunc from '../../../api.jsx'
import { childAdded } from '../../../actions.jsx'

const api = apiFunc()

class CaseSubjectForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      placementTypes: []
    }
  }
  componentDidMount () {
    api.getPlacementTypes().then(r => this.setState({ placementTypes: r }))
  }

  addCaseSubject (childToAdd) {
    this.props.dispatch(childAdded(childToAdd))
    this.props.router.push('/cases/new/case')
  }

  render () {
    const {fields: {
      givenNames, familyName, dob, currentPlacement, address, phone, email,
      aliases, nickname, gender, bloodType, allergies, height, weight, school,
      clubsAttended, eyeColor, job, preferredLanguage, languagesSpoken, requiresTranslator,
      atsi, atsiLocation, sourceId, sourceAgency, violence, removalFromCare
      }, handleSubmit} = this.props
    const placementTypes = this.state.placementTypes
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.addCaseSubject.bind(this))}>
          <h1>New Case</h1>
          <div>
            <fieldset>
              <legend>
                Child Details
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="givenNames">Given names</label>
                    <input type="text" className="form-control" id="givenNames" {...givenNames} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="familyName">Family name</label>
                    <input type="text" className="form-control" id="familyName" {...familyName} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" className="form-control" id="nickname" {...nickname} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="aliases">Aliases</label>
                    <input type="text" className="form-control" id="aliases" {...aliases} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select type="text" className="form-control" id="gender" {...gender}>
                      <option key=""></option>
                      <option key="Female">Female</option>
                      <option key="Male">Male</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" {...dob} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="bloodType">Blood Type</label>
                    <select className="form-control" id="bloodType" {...bloodType}>
                      <option></option>
                      <option>O+</option>
                      <option>O–</option>
                      <option>A+</option>
                      <option>A–</option>
                      <option>B+</option>
                      <option>B–</option>
                      <option>AB+</option>
                      <option>AB–</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="allergies">Allergies</label>
                    <input type="text" className="form-control" id="allergies" {...allergies} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="height">Height</label>
                    <input type="text" className="form-control" id="height" {...height} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" className="form-control" id="weight" {...weight} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="eyeColor">Eye Color</label>
                    <input type="text" className="form-control" id="eyeColor" {...eyeColor} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="atsi">ATSI (Aboriginal or Torres Strait Islander)</label>
                    <select className="form-control" id="atsi" {...atsi}>
                      <option key="Unknown">Unknown</option>
                      <option key="Yes">Yes</option>
                      <option key="No">No</option>
                      <option key="NotIdentifying">Not Identifying</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="atsiLocation">ATSI Mob or Location</label>
                    <input type="text" className="form-control" id="atsiLocation" {...atsiLocation} />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Placement Details</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="currentPlacement">Current Placement</label>
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
            </fieldset>
            <fieldset>
              <legend>Contact Details</legend>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="address">Current Address</label>
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
            </fieldset>
            <fieldset>
              <legend>Languages</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="preferredLanguage">Preferred Language</label>
                    <input type="text" className="form-control" id="preferredLanguage" {...preferredLanguage} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="languagesSpoken">Languages Spoken</label>
                    <input type="text" className="form-control" id="languagesSpoken" {...languagesSpoken} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="requiresTranslator">Requires Translator</label>
                    <input type="text" className="form-control" id="requiresTranslator" {...requiresTranslator} />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Activities</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input type="text" className="form-control" id="job" {...job} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="school">School</label>
                    <input type="text" className="form-control" id="school" {...school} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="clubsAttended">Clubs Attended</label>
                    <input type="text" className="form-control" id="clubsAttended" {...clubsAttended} />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Source</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="sourceId">Source Id Number</label>
                    <input type="text" className="form-control" id="sourceId" {...sourceId} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="sourceAgency">Source Agency</label>
                    <select type="text" className="form-control" id="sourceAgency" {...sourceAgency}>
                      <option></option>
                      <option>Berry Street</option>
                      <option>VACCA</option>
                      <option>DHHS</option>
                      <option>Take Two</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

            </fieldset>
            <fieldset>
              <legend>History</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="violence">Violence in Kith or Kin network</label>
                    <select className="form-control" id="violence" {...violence}>
                      <option key="Unknown">Unknown</option>
                      <option key="Yes">Yes</option>
                      <option key="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="removalFromCare">Removal from care date</label>
                    <input type="text" className="form-control" id="removalFromCare" {...removalFromCare} />
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
  fields: ['givenNames', 'familyName', 'dob', 'currentPlacement', 'address', 'phone', 'email',
    'aliases', 'nickname', 'gender', 'bloodType', 'allergies', 'height', 'weight', 'school',
    'clubsAttended', 'eyeColor', 'job', 'preferredLanguage', 'languagesSpoken', 'requiresTranslator',
    'atsi', 'atsiLocation', 'sourceId', 'sourceAgency', 'violence', 'removalFromCare'],
  form: 'caseSubjectForm'
},
  state => ({

  })
)(withRouter(CaseSubjectForm))
