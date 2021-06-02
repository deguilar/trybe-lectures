import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import Coordinates from './Coordinates';

class ISSLocation extends Component {
  render() {
    const latitude = -19.917299;
    const longitude = -43.934559;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </main>
    );
  }
}

export default ISSLocation;
