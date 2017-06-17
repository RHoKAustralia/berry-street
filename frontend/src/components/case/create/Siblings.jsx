import React, { Component } from "react"
import { Field, FieldArray, reduxForm } from 'redux-form'
import { NBSP, FORM_CASE } from '../../../constants'

const renderSiblings = ({ fields, meta: { error, submitFailed } }) => (
    <fieldset>
        <legend>Siblings {fields.length ? `(${fields.length})` : null} <button type="button" className="btn btn-sm btn-primary pull-right" onClick={() => fields.push({})}>Add New</button></legend>
        <table className="table">
            <tbody>
                {(() => {
                    if (fields.length > 0) {
                        return fields.map((sibling, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor={`${sibling}.siblingName`}>Name</label>
                                        <Field name={`${sibling}.siblingName`} component="input" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <label>
                                                <Field name={`${sibling}.siblingRel`} component="input" type="radio" value="brother" />
                                                {NBSP}
                                                Brother
                                            </label>
                                            <label>
                                                {NBSP}
                                                <Field name={`${sibling}.siblingRel`} component="input" type="radio" value="sister" />
                                                {NBSP}
                                                Sister
                                            </label>
                                        </div>
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
                                    You currently have no Siblings added
                                </div>
                            </td>
                        </tr>
                    }
                })()}
            </tbody>
        </table>
    </fieldset>
)

export default class Siblings extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <FieldArray name="siblings" component={renderSiblings} />
    }
}