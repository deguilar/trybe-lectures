import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('Cadastro de clientes', () => {
  test('renderiza a página inicial ao entrar no app', () => {
    renderWithRouterAndRedux(
      <App />,
    );

    const registerText = screen.getByText(/cadastro de clientes/i);
    expect(registerText).toBeInTheDocument();
  });

  test('o login funciona corretamente', () => {
    const { store } = renderWithRouterAndRedux(
      <App />,
    );

    const goToLoginPageLink = screen.getByRole('link', {
      name: /faça seu login/i,
    });

    userEvent.click(goToLoginPageLink);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    userEvent.type(emailInput, 'apolonio@gmail.com');
    userEvent.type(passwordInput, '123456');

    const loginButton = screen.getByRole('link', {
      name: /login/i,
    });
    userEvent.click(loginButton);

    const noClientsText = screen.getByText(/nenhum cliente cadastrado/i);
    expect(noClientsText).toBeInTheDocument();

    const loggedInUser = store.getState().loginReducer;
    expect(loggedInUser.email).toBe('apolonio@gmail.com');
    expect(loggedInUser.password).toBe('123456');
  });

  test('cadastra pessoas clientes corretamente', () => {
    const { store } = renderWithRouterAndRedux(<App />, {
      initialEntries: ['/register'],
      initialState: {
        loginReducer: {
          email: 'apolonio@gmail.com',
          password: '123456',
        },
        registerReducer: [],
      },
    });

    const registerButton = screen.getByRole('button', {
      name: /registrar cliente/i,
    });

    const nameInput = screen.getByPlaceholderText(/nome/i);
    const ageInput = screen.getByPlaceholderText(/idade/i);
    const emailInput = screen.getByPlaceholderText(/email/i);

    userEvent.type(nameInput, 'John Doe');
    userEvent.type(ageInput, '23');
    userEvent.type(emailInput, 'john.doe@gmail.com');

    userEvent.click(registerButton);

    const [firstClient] = store.getState().registerReducer;
    expect(firstClient.name).toBe('John Doe');
    expect(firstClient.age).toBe('23');
    expect(firstClient.email).toBe('john.doe@gmail.com');
  });
});
