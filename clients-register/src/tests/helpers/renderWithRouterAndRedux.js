import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducers from '../../reducers';

const renderWithRouterAndRedux = (component, {
  initialState = {},
  store = createStore(rootReducers, initialState),
  initialEntries = ['/'],
  history = createMemoryHistory({ initialEntries }),
} = {}) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>,
    </Router>,
  ),
  store,
  history,
});

export default renderWithRouterAndRedux;
