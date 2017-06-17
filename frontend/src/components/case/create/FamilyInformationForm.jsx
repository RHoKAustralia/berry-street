import React, { Component } from "react"
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router'
import apiFunc from '../../../api.jsx'
import { NBSP, FORM_CASE } from '../../../constants'
import Parents from './Parents.jsx'
import Siblings from './Siblings.jsx'
import OtherRelatives from './OtherRelatives.jsx'

const api = apiFunc()

export default class FamilyInformationForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <div className="row">
                <div className="col-md-6">
                    <Parents />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Siblings />
                </div>
                <div className="col-md-6">
                    <OtherRelatives />
                </div>
            </div>
        </div>
    }
}