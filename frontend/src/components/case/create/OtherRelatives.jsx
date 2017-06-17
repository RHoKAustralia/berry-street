import React, { Component } from "react"
import { Field, FieldArray, reduxForm } from 'redux-form'
import { NBSP, FORM_CASE } from '../../../constants'

const renderRelated = ({ fields, meta: { error, submitFailed } }) => (
    <fieldset>
        <legend>Relatives/Friends {fields.length ? `(${fields.length})` : null} <button type="button" className="btn btn-sm btn-primary pull-right" onClick={() => fields.push({})}>Add New</button></legend>
        <table className="table">
            <tbody>
                {(() => {
                    if (fields.length > 0) {
                        return fields.map((related, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor={`${related}.name`}>Name</label>
                                        <Field name={`${related}.name`} component="input" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={`${related}.relation`}>Relation</label>
                                        <Field name={`${related}.relation`} component="select" className="form-control">
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
                                    You currently have no Relatives/Friends added
                                </div>
                            </td>
                        </tr>
                    }
                })()}
            </tbody>
        </table>
    </fieldset>
)

export default class OtherRelatives extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <FieldArray name="related" component={renderRelated} />
    }
}