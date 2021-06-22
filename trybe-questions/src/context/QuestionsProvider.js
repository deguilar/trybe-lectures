import React, { useState } from 'react';
import { createQuestion, getQuestions } from '../services/api';

import QuestionsContext from './QuestionsContext';

function QuestionsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function fetchQuestions() {
    setIsLoading(true);
    const questions = await getQuestions();
    setQuestions(questions);
    setIsLoading(false);
  }

  const createNewQuestion = async (newQuestion) => {
    setIsLoading(true);
    await createQuestion(newQuestion);
    setQuestions(questions.concat(newQuestion));
    setIsLoading(false);
  }

  return (
    <QuestionsContext.Provider value={ { questions, isLoading, fetchQuestions, createNewQuestion } }>
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
