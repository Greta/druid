import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inventory extends Component {
  render() {
    return <div>Inventory</div>
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
}

export default connect(mapStateToProps)(Inventory);
