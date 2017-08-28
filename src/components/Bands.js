import React, { Component } from 'react';

class Bands extends Component {



  render(){

    const bandJSX = this.props.store.getState().bands.map(band => {
      return (
        <li> {band} </li>
      )
    })

    return (
      <div>
        <ul>
          {bandJSX}
        </ul>
      </div>
    );
  }
};

export default Bands;
