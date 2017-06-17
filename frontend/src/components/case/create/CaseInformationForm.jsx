import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router'
import apiFunc from '../../../api.jsx'
import { NBSP, FORM_CASE } from '../../../constants'

const api = apiFunc()

export default class CaseInformationForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="row">
            <div className="col-md-6">
                <fieldset>
                    <legend>Case Information</legend>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <Field name="dateOfBirth" component="input" type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <Field name="address" component="textarea" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="atsi">Aboriginal or Torres Strait Islander</label>
                        {NBSP}
                        <Field name="atsi" component="input" type="checkbox" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="caseType">Type of Case</label>
                        <Field name="caseType" component="select" className="form-control">
                            <option />
                            <option value="ff0000">Red</option>
                            <option value="00ff00">Green</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <label htmlFor="caseManager">Case Manager</label>
                        <Field name="caseManager" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="casePlanner">Case Planner</label>
                        <Field name="casePlanner" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="agency">Agency</label>
                        <Field name="agency" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="casePlan">Case Plan</label>
                        <Field name="casePlan" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="courtOrder">Court Order</label>
                        <Field name="courtOrder" component="select" className="form-control">
                            <option />
                            <option value="Foo">Foo</option>
                            <option value="Bar">Bar</option>
                            <option value="Baz">Baz</option>
                        </Field>
                    </div>
                </fieldset>
            </div>
            <div className="col-md-6">
                <fieldset>
                    <legend>Referral Information</legend>
                    <div className="form-group">
                        <label htmlFor="referralSource">Referral Source</label>
                        <Field name="referralSource" component="input" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="referralDate">Referral Date</label>
                        <Field name="referralDate" component="input" type="date" className="form-control" />
                    </div>
                </fieldset>
            </div>
        </div>
    }
}