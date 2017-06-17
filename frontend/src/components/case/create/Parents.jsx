import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'
import { FORM_CASE } from '../../../constants'

export default class Parents extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <fieldset>
            <legend>Parents</legend>
            <div className="form-group">
                <label htmlFor="mother">Mother</label>
                <Field name="mother" component="input" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="father">Father</label>
                <Field name="father" component="input" type="text" className="form-control" />
            </div>
        </fieldset>
    }
}