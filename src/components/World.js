import React, { Component } from 'react';
import { connect } from 'react-redux';

class World extends Component {
  render() {
    return <div id="world">World</div>
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(World);
