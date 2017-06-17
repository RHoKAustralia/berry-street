import React, { Component } from "react"
import { DisplayField } from "../../common/DisplayField.jsx"

export const SubjectCard = (props) => {
    return <div className="form-horizontal">
        <DisplayField label="First Name" value={props.givenNames} />
        <DisplayField label="Last Name" value={props.familyName} />
        <DisplayField label="Date of Birth" value={props.dateOfBirth} />
        <DisplayField label="Contact Information" value={props.contactInformation} />
        <DisplayField label="Aboriginal or Torres Strait Islander" value={props.atsi} />
    </div>
}