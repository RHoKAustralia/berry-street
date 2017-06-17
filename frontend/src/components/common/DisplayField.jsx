import React, { Component } from "react"

export const DisplayField = (props) => {
    const { label, value, labelSize, name } = props;
    const lblSize = labelSize || 3;
    return <div className="form-group">
        <label className={`control-label col-sm-${lblSize}`} htmlFor={name}>{label}:</label>
        <div className={`col-sm-${12 - lblSize}`}>
            <p className="form-control-static">{value}</p>
        </div>
    </div>
}