import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import Coordinates from './Coordinates';

const ONE_SECOND = 1000;
class ISSLocation extends Component {
  componentDidMount() {
    setInterval(() => {
      // update coordinates
    }, ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = { latitude: 10.0, longitude: 20.0 };

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
