import React, {Component} from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '100%',
  borderRadius: "10px",
  marginLeft: '20px',
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={
          {
            lat: 43.3592,
            lng: -1.7759
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAUfa_BWSYATgLCpsCO4rBevb_gLCEHBSw'
})(MapContainer);
