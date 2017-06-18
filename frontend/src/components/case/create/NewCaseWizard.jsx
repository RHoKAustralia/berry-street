import React, { Component } from "react"
import CaseInformationForm from "./CaseInformationForm.jsx"
import FamilyInformationForm from "./FamilyInformationForm.jsx"
import RiskInformationForm from "./RiskInformationForm.jsx"
import CaseReviewStep from "./CaseReviewStep.jsx"
import { FORM_CASE } from '../../../constants'
import { Form, reduxForm } from 'redux-form'

function validate(values) {
    const errors = {};
    return errors;
}

const WIZARD_STEPS = [
    { step: 1, title: "Case Profile", canGoBack: false, canGoForward: true, renderer: (props, state) => <CaseInformationForm /> },
    { step: 2, title: "Family", canGoBack: true, canGoForward: true, renderer: (props, state) => <FamilyInformationForm /> },
    { step: 3, title: "Risks", canGoBack: true, canGoForward: true, renderer: (props, state) => <RiskInformationForm /> },
    { step: 4, title: "Review/Save", canGoBack: true, canGoForward: false, renderer: (props, state) => <CaseReviewStep submitting={props.submitting} /> }
]

class NewCaseWizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1
        }
        this.fnNextStep = this.onNextStep.bind(this)
        this.fnPrevStep = this.onPrevStep.bind(this)
        this.fnSubmit = this.onSubmit.bind(this)
    }
    onNextStep() {
        this.setState({ currentStep: this.state.currentStep + 1 });
    }
    onPrevStep() {
        this.setState({ currentStep: this.state.currentStep - 1 });
    }
    onSubmit(values) {
        console.log(values)
    }
    

    render() {
        const { handleSubmit } = this.props;
        const { currentStep } = this.state
        const activeStep = WIZARD_STEPS.filter(w => w.step == currentStep)[0];
        return <div className="container-fluid">
            <h3 className="page-header">New Case</h3>
            <div className="row">
                <div role="content">
                    <div className="widget-body">
                        <Form onSubmit={handleSubmit(this.fnSubmit)} noValidate="noValidate">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-bootstrapWizard">
                                        <ul className="bootstrapWizard form-wizard">
                                            {WIZARD_STEPS.map((wizardStep, i) => {
                                                const name = `#${wizardStep.step}`;
                                                return <li key={`wizard-step-${wizardStep.step}`} className={wizardStep.step == currentStep ? "active" : null} data-target={`#${name}`}>
                                                    <a data-toggle="tab" className="active"> <span className="step">{wizardStep.step}</span> <span className="title">{wizardStep.title}</span> </a>
                                                </li>
                                            })}
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    {(() => {
                                        if (activeStep) {
                                            return <div className="container-fluid">
                                                <br />
                                                <h3 className="page-header"><strong>Step {activeStep.step}</strong> - {activeStep.title}</h3>
                                                {activeStep.renderer(this.props, this.state)}
                                                <div className="form-actions">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <ul className="pager wizard no-margin">
                                                                {(() => {
                                                                    if (activeStep.canGoBack) {
                                                                        return <li className="previous">
                                                                            <a className="btn btn-lg btn-default" onClick={this.fnPrevStep}> Previous </a>
                                                                        </li>
                                                                    }
                                                                })()}
                                                                {(() => {
                                                                    if (activeStep.canGoForward) {
                                                                        return <li className="next">
                                                                            <a className="btn btn-lg txt-color-darken" onClick={this.fnNextStep}> Next </a>
                                                                        </li>
                                                                    }
                                                                })()}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        } else {
                                            return <div className="alert alert-error">
                                                Unknown wizard step
                                            </div>
                                        }
                                    })()}
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default reduxForm({
    form: FORM_CASE,
    validate
})(NewCaseWizard);