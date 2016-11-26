import React, { Component } from "react"
import { Link } from 'react-router';

const TEST_DATA = [
  { surname: "Simpson", firstname: "Bart", phase: "New", case_id: 1 },
  { surname: "Simpson", firstname: "Lisa", phase: "Talking", case_id: 2 },
  { surname: "Van Houten", firstname: "Milhouse", phase: "New", case_id: 3 },
  { surname: "Wiggum", firstname: "Ralph", phase: "New", case_id: 4 },
  { surname: "Muntz", firstname: "Nelson", phase: "Closed", case_id: 5 },
  { surname: "Simpson", firstname: "Maggie", phase: "Closed", case_id: 6 } /*,
    { name: "Lisa Simpson", phase: "Talking", case_id: 7 },
    { name: "Lisa Simpson", phase: "Talking", case_id: 8 },
    ,{ name: "Lisa Simpson", phase: "Talking", case_id: 9 },
    { name: "Lisa Simpson", phase: "Talking", case_id: 10 },
    { name: "Lisa Simpson", phase: "Talking", case_id: 11 },*/
];

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
      <Link to={`/cases/${this.props.case.case_id}/edit`} className="rlisting">
        <div className="col-md-12 nopad">
          <img src={`http://lorempixel.com/${TILE_WIDTH}/${TILE_WIDTH}/cats/${this.props.case.case_id}`} className="img-responsive" />
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
  }
  render() {
    return <div className="row">
      <CreateNewCaseTile />
      {TEST_DATA.map(function (item) { return <CaseTile key={item.case_id} case={item} />; })}
    </div>
  }
}

export default CaseTileGrid