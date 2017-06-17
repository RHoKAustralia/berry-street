import React, { Component } from "react"
export const CaseWorkerCard = (props) => {
    return <table className="table table-user-information">
        <tbody>
            <tr>
                <td>Case Manager:</td>
                <td>{props.caseManager}</td>
            </tr>
            <tr>
                <td>Case Plan:</td>
                <td>{props.casePlan}</td>
            </tr>
            <tr>
                <td>Referrer:</td>
                <td>{props.referrer}</td>
            </tr>
            <tr>
                <td>Time since care:</td>
                <td>{props.timeSinceCare}</td>
            </tr>
            <tr>
                <td>Ref date:</td>
                <td>{props.refDate}</td>
            </tr>
        </tbody>
    </table>
}