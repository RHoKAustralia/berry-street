import React, { Component } from "react"

export class FamilyList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { familyMembers } = this.props;
        return <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Relationship</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {(familyMembers || []).map((fm, i) => {
                    return <tr key={i}>
                        <td>{fm.relationship}</td>
                        <td>{fm.name}</td>
                        <td>{fm.phone}</td>
                    </tr>
                })}
            </tbody>
        </table>
    }
}