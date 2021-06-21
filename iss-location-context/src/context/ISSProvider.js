import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: -19.8157,
      longitude: -43.9542,
      error: null,
      isLoading: false,
    };

    this.getISSLocation = this.getISSLocation.bind(this);
  }

  async getISSLocation() {
    const result = await getCurrentISSLocation();
    this.setState({
      latitude: result.iss_position.latitude,
      longitude: result.iss_position.longitude,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={
          { ...this.state, getISSLocation: this.getISSLocation }
        }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
