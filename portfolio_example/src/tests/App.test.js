import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('App.js tests', () => {
  test('Renderiza as páginas "sobre mim" e "projetos"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const aboutMeText = screen.getByRole('heading', {
      name: /página sobre mim/i,
      level: 1,
    });

    expect(aboutMeText).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', {
      name: /projetos/i,
    });

    userEvent.click(projectsLink);

    const projectsText = screen.getByRole('heading', {
      name: /página de projetos/i,
      level: 1,
    });

    expect(projectsText).toBeInTheDocument();
  });

  test('Renderiza uma mensagem de "Página não encontrada" quando a'
    + 'rota é inválida', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    history.push('/rota-que-não-existe');

    const projectsText = getByRole('heading', {
      name: /página não encontrada/i,
      level: 1,
    });

    expect(projectsText).toBeInTheDocument();
  });
});

describe('App.js Comments test', () => {
  test('Entra na página /comments e deixa um comentário', () => {
    const { getByRole, history } = renderWithRouter(<App />);

    history.push('/comments');

    const commentsText = getByRole('heading', {
      name: /comente!/i,
      level: 1,
    });

    expect(commentsText).toBeInTheDocument();

    const commentsInput = screen.getByRole('textbox');
    userEvent.type(commentsInput, 'alguma coisa');

    const addCommentButton = screen.getByRole('button', {
      name: /add comment/i,
    });
    userEvent.click(addCommentButton);

    const listItem = screen.getByText('alguma coisa');

    expect(listItem).toBeInTheDocument();
  });
});
