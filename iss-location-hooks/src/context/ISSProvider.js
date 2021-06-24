import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation, getPeopleInSpace } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isFetching: false,
      peopleInSpace: [],
      showMap: true,
    };

    this.getISSLocation = this.getISSLocation.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
    this.getPeopleInSpace = this.getPeopleInSpace.bind(this);
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

  getPeopleInSpace() {
    // seta isFetching pra true
    // fazer a requisicao
    // armazenar o resultado no context

    this.setState({ isFetching: true }, async () => {
      const { people } = await getPeopleInSpace();
      this.setState({
        peopleInSpace: people,
        isFetching: false,
      });
    });
  }

  toggleMap() {
    console.log('togglemap');
    this.setState(({ showMap }) => ({ showMap: !showMap }));
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ {
          ...this.state,
          toggleMap: this.toggleMap,
          getISSLocation: this.getISSLocation,
          getPeopleInSpace: this.getPeopleInSpace,
        } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
