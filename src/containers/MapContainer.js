import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    const style = {
            width: '100%',
            postion: 'fixed'
    }

    let markers = this.props.quakes.map((quake, i) => {
        let position = {lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]}
        return <Marker icon={{url: '/favicon.ico', scaledSize: new this.props.google.maps.Size(16,16)}} title={quake.properties.mag.toString()} position={position} key={i}/>
       })

    return (
      <div className='mapwrap'>  
      <Map
       google={this.props.google}
        zoom={2}
        style = {style}
        >
        {markers}
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(MapContainer)