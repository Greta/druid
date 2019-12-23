import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    return (
      <table>
        <tbody>
        {this.props.map.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((square, squareIndex) => {
                return <td key={squareIndex} className={square}></td>
              })}
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  };
};

const mapStateToProps = state => {
  return {
    map: state.map
  };
};

export default connect(mapStateToProps)(Map);
