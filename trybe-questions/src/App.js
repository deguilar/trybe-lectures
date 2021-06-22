import React from 'react';
import { Route, Switch } from 'react-router-dom';

import QuestionListPage from './pages/QuestionListPage';
import NewQuestionPage from './pages/NewQuestionPage';

import './App.css';

function App() {
  return (
    <main className="App">
      <header className="main-header">
        <section className="main-header-title">
          <h3>Trybe Questions</h3>
        </section>
      </header>
      <section className="main-section">
        <Switch>
          <Route
            path="/new-question"
            render={ (props) => <NewQuestionPage { ...props } /> }
          />
          <Route
            path="/"
            render={ (props) => <QuestionListPage { ...props } /> }
          />
        </Switch>
      </section>
    </main>
  );
}

export default App;
