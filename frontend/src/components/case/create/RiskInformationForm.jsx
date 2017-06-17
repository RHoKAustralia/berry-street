import React, { Component } from "react"
import { Field, FieldArray, reduxForm } from 'redux-form'
import { NBSP, FORM_CASE } from '../../../constants'

const renderRisks = ({ fields, meta: { error, submitFailed } }) => (
    <fieldset>
        <legend>Risks {fields.length ? `(${fields.length})` : null} <button type="button" className="btn btn-sm btn-primary pull-right" onClick={() => fields.push({})}>Add New</button></legend>
        <table className="table">
            <tbody>
                {(() => {
                    if (fields.length > 0) {
                        return fields.map((risk, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor={`${risk}.name`}>Name</label>
                                        <Field name={`${risk}.name`} component="input" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`${risk}.type`}>Risk Type</label>
                                        <Field name={`${risk}.type`} component="select" className="form-control">
                                            <option />
                                            <option value="Uncle">Uncle</option>
                                            <option value="Aunt">Aunt</option>
                                            <option value="Neighbour">Neighbour</option>
                                            <option value="Friend">Friend</option>
                                            <option value="FriendParent">Friend's parent</option>
                                            <option value="Other">Other</option>
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`${risk}.legalOutcome`}>Legal Outcome</label>
                                        <Field name={`${risk}.legalOutcome`} component="select" className="form-control">
                                            <option />
                                            <option value="Uncle">Uncle</option>
                                            <option value="Aunt">Aunt</option>
                                            <option value="Neighbour">Neighbour</option>
                                            <option value="Friend">Friend</option>
                                            <option value="FriendParent">Friend's parent</option>
                                            <option value="Other">Other</option>
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`${risk}.date`}>Date Of Birth</label>
                                        <Field name={`${risk}.date`} component="input" type="date" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`${risk}.status`}>Status</label>
                                        <Field name={`${risk}.status`} component="select" className="form-control">
                                            <option />
                                            <option value="Uncle">Uncle</option>
                                            <option value="Aunt">Aunt</option>
                                            <option value="Neighbour">Neighbour</option>
                                            <option value="Friend">Friend</option>
                                            <option value="FriendParent">Friend's parent</option>
                                            <option value="Other">Other</option>
                                        </Field>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        title="Remove"
                                        onClick={() => fields.remove(index)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    } else {
                        return <tr>
                            <td>
                                <div className="alert alert-info">
                                    You currently have no risks added
                                </div>
                            </td>
                        </tr>
                    }
                })()}
            </tbody>
        </table>
    </fieldset>
)

export default class RiskInformatonForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <FieldArray name="risks" component={renderRisks} />
    }
}