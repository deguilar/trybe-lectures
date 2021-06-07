/* eslint-disable */
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import rootReducers from '../../reducers';

const renderWithRedux = (component, {
  initialState = {},
  store = createStore(rootReducers, initialState)
}) => {
  return {
    ...render(
      <Provider store={ store }>
        {component}
      </Provider>,
    ),
    store,
  };
};

export default renderWithRedux;
