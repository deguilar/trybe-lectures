import React, { useContext, useState } from 'react';
import QuestionsContext from '../context/QuestionsContext';
import { useHistory } from 'react-router';

function NewQuestionPage() {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState();

  const history = useHistory(); // custom hooks
  const { createNewQuestion: createNewQuestionApi } = useContext(QuestionsContext);

  function createNewQuestion(ev) {
    ev.preventDefault();
    const newQuestion = { user: name, question };
    createNewQuestionApi(newQuestion);
    history.push('/');
  }

  return (
    <section className="question-section">
      <form onSubmit={ createNewQuestion }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            value={question}
            onChange={(ev) => setQuestion(ev.target.value)}
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            type="text"
            name="name"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
