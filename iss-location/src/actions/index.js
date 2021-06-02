import { getCurrentISSLocation } from '../services/issAPI';

export const GET_ISS_LOCATION = 'GET_ISS_LOCATION';
export const GET_ISS_LOCATION_SUCCESS = 'GET_ISS_LOCATION_SUCCESS';
export const GET_ISS_LOCATION_ERROR = 'GET_ISS_LOCATION_ERROR';

export const getISSLocation = () => ({
  type: GET_ISS_LOCATION,
});

export const getISSLocationSuccess = (payload) => ({
  type: GET_ISS_LOCATION_SUCCESS,
  payload,
});

export const getISSLocationError = (payload) => ({
  type: GET_ISS_LOCATION_ERROR,
  payload,
});

export const getISSLocationThunk = () => (dispatch) => {
  // is loading true
  dispatch(getISSLocation());

  // chama a api
  getCurrentISSLocation()
    .then((res) => { // deu certo a chamada da api
      const { iss_position: { latitude, longitude } } = res;
      dispatch(getISSLocationSuccess({
        latitude: Number(latitude), longitude: Number(longitude),
      })); // atualizar o estado global
    })
    .catch(() => { getISSLocationError(); }); // atualizar o estado global com erro
};
