import React, { Component } from 'react';
import { connect } from 'react-redux';

class Party extends Component {
  render() {
    return <div>Party</div>
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(Party);
