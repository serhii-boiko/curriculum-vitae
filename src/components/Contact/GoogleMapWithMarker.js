import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const styles = require('./GoogleMapStyles.json');

const center = {
  lng: 23.982849,
  lat: 49.832717,
};

const GoogleMapComponentWithMarker = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={center}
      defaultOptions={{
        disableDefaultUI: true,
        draggable: true,
        keyboardShortcuts: false,
        scaleControl: true,
        scrollwheel: true,
        styles: styles,
      }}
    >
      <Marker
        icon={{
          url:
            'https://cdn.mapmarker.io/api/v1/pin?size=60&background=%2308fdd8&text=SB&color=%23FFFFFF&voffset=2&hoffset=1&',
        }}
        position={center}
      />
    </GoogleMap>
  ))
);

export default GoogleMapComponentWithMarker;
