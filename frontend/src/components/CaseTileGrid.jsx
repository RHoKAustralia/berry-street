import React, { Component } from "react"
import { Link } from 'react-router'
import api from "../api.jsx"

const TILE_WIDTH = 250;
const TILE_HEIGHT = 310;
const TILE_VERT_MARGIN = 15;

class CreateNewCaseTile extends Component {
  render() {
    return <div style={{ height: TILE_HEIGHT, marginBottom: TILE_VERT_MARGIN }} className="col-xs-12 col-sm-6 col-md-3 rwrapper">
      <div className="col-md-12 nopad" style={{ height: "100%" }}>
        <Link to='/cases/new' style={{ width: TILE_WIDTH }} className="btn btn-block btn-success">
          <h1 style={{ fontSize: 80 }}><i className="fa fa-plus" style={{ verticalAilgn: "middle" }} /></h1>
          <h3>New Case</h3>
        </Link>
      </div>
    </div>
  }
}

class CaseTile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={{ height: TILE_HEIGHT, marginBottom: TILE_VERT_MARGIN }} className="col-xs-12 col-sm-6 col-md-3 rwrapper">
      <Link to={`/cases/${this.props.case.caseNumber}/edit`} className="rlisting">
        <div className="col-md-12 nopad">
          <img src={`http://lorempixel.com/${TILE_WIDTH}/${TILE_WIDTH}/cats/${this.props.case.caseNumber}`} className="img-responsive" />
        </div>
        <div className="col-md-12 nopad">
          <h5>{`${this.props.case.surname}, ${this.props.case.firstname}`}</h5>
          <div className="rfooter">
            <i className="fa fa-flag"></i> {this.props.case.phase}
          </div>
        </div>
      </Link>
    </div>
  }
}

class CaseTileGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: null,
      error: null
    };
  }
  componentDidMount() {
    api.getCases()
       .then(r => this.setState({ summary: r }))
       .catch(err => this.setState({ error: err }));
  }
  render() {
    const { summary, error } = this.state;
    if (summary) {
      return <div className="row">
        <CreateNewCaseTile />
        {summary.map((item) => <CaseTile key={item.caseNumber} case={item} />)}
      </div>
    } else {
      return <div className="alert alert-info">
        <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    }
  }
}

export default CaseTileGrid