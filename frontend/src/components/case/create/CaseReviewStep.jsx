import React, { Component } from "react"

export default class CaseReviewStep extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { error, submitting } = this.props
        if (submitting) {
            return <div>
                <div className="alert alert-info">
                    Submitting ...
                </div>
            </div>
        } else {
            return <div>
                <h3 className="page-header">Validation Errors</h3>
                {(() => {
                    if (error) {
                        return <div className="alert alert-danger">
                            <p>Errors were found validating the form. Please correct.</p>
                            {error}
                        </div>
                    } else {
                        return <div className="alert alert-success">
                            Everything's good to submit!
                        </div>
                    }
                })()}

                {(() => {
                    if (!error) {
                        return <div>
                            <button type="submit" className="btn btn-lg btn-success">Submit</button>
                        </div>
                    }
                })()}
            </div>
        }
    }
}