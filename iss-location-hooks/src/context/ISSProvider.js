import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isFetching: false,
      peopleInSpace: [],
    };

    this.getISSLocation = this.getISSLocation.bind(this);
  }

  getISSLocation() {
    // seta isFetching pra true
    // fazer a requisicao
    // armazenar o resultado no context

    this.setState({ isFetching: true }, async () => {
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ {
          ...this.state,
          getISSLocation: this.getISSLocation,
        } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
