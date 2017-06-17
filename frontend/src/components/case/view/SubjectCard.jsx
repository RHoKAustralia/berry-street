import React, { Component } from "react"

export const SubjectCard = (props) => {
    return <table className="table table-user-information">
        <tbody>
            <tr>
                <td>DOB:</td>
                <td>{props.dob}</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>{props.address}</td>
            </tr>
        </tbody>
    </table>
}