import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';
import { connect } from 'react-redux';
import { getISSLocationThunk } from '../actions';

import Coordinates from './Coordinates';

const ONE_SECOND = 1000;
class ISSLocation extends Component {
  componentDidMount() {
    const { getISSLocation } = this.props;

    setInterval(() => {
      getISSLocation();
    }, ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = this.props;

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

const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({
  latitude,
  longitude,
});

const mapDispatchToProps = (dispatch) => ({
  getISSLocation: () => dispatch(getISSLocationThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
