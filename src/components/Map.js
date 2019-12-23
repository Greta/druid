import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    console.log(this.props);
    return <div>Map</div>;
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  };
}

export default connect(mapStateToProps)(Map);
