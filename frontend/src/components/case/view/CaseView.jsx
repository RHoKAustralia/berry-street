import React, { Component } from 'react'
import apiFunc from '../../../api.jsx'
import { CaseWorkerCard } from './CaseWorkerCard.jsx'
import { SubjectCard } from './SubjectCard.jsx'
import { FamilyList } from '../list/FamilyList.jsx'
import CaseGraph from './CaseGraph.jsx'

const api = apiFunc()

class CaseView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ffCase: null,
      error: null
    }
  }

  componentDidMount() {
    this.reloadCase()
  }

  reloadCase() {
    api.getCase(this.props.params.caseId)
      .then(result => {
        this.setState(Object.assign({}, this.state, { ffCase: result }))
      })
      .catch(err => this.setState({ error: err }))
  }
  render() {
    const { ffCase, error } = this.state
    if (error) {
      return <div className="container-fluid">
        <div className="alert alert-danger">Error: {error.message}</div>
      </div>
    } else if (!ffCase) {
      return <div className="container-fluid">
        <div className="alert alert-info">Loading...</div>
      </div>
    } else {
      const { subject } = ffCase
      return <div className="container-fluid">
        <div className="media">
          <div className="media-body">
            <h4 className="media-heading">Case Profile: {subject.givenNames}</h4>
          </div>
          <div className="media-right">
            <img alt="64x64"
              className="media-object"
              data-src="holder.js/64x64"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWNiNzYyNzMxZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1Y2I3NjI3MzFmIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
              data-holder-rendered="true"
              style={{ width: 64, height: 64 }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SubjectCard {...subject} />
          </div>
          <div className="col-md-6">
            <CaseGraph caseId={ffCase.id} />
          </div>
        </div>
      </div>
    }
  }
}

export default CaseView
