import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { initialState } from './__mock__/reduxStore';
import App from './App';
import '@testing-library/jest-dom';

const middleware = [thunkMiddleware];
const mockStore = configureStore(middleware);

test('renders learn react link', () => {

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Dynamic Form/i);
  expect(linkElement).toBeInTheDocument();
});
