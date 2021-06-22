import React from 'react';

function NewQuestionPage() {
  return (
    <section className="question-section">
      <form onSubmit={ () => {} }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
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
