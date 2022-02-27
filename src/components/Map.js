import React, {Component} from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%',
  borderRadius: "10px",
};
const containerStyle = {
  position: 'absolute',  
  width: '40vw',
  height: '50vh',
  marginTop: "150px",
}
export class MapContainer extends Component {
   state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
   onMouseoverMarker = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
    <Map
        google={this.props.google}
        zoom={17}
        style={style}
        containerStyle={containerStyle}
        initialCenter={
          {
            lat: 43.3592,
            lng: -1.7759
          }
        }
      >
      <Marker
          onMouseover={this.onMouseoverMarker}
          name={'Hypnothérapeute - Christophe Baccou'}
      />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAUfa_BWSYATgLCpsCO4rBevb_gLCEHBSw'
})(MapContainer);
