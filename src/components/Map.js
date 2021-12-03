import React, {Component} from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '10%',
  height: '20%',
  marginLeft: '30px',
  borderRadius: "5%",
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
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
