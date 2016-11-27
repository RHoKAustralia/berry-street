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
    const { subjects } = this.props.case;
    return <div style={{ heighdt: TILE_HEIGHT, marginBottom: TILE_VERT_MARGIN }} className="col-xs-12 col-sm-6 col-md-3 rwrapper">
      <Link to={`/cases/${this.props.case.id}`} className="rlisting">
        <div className="col-md-12 nopad">
          <img src={subjects[0].person.image} className="img-responsive" />
        </div>
        <div className="col-md-12 nopad">
          <h5>{`${subjects[0].person.name}`}</h5>
          <div className="rfooter">
            <i className="fa fa-flag"></i> {this.props.case.phaseOfInvolvement}
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
        {summary.map((item) => <CaseTile key={item.id} case={item} />)}
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
