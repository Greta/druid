import React, { Component } from 'react';
import { connect } from 'react-redux';

class Compass extends Component {
  render() {
    return <div>Compass</div>
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(Compass);
