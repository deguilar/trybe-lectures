import React from 'react';

import QuestionCard from './QuestionCard';

function QuestionList() {
  const questions = [{
    id: 1,
    question: "Como fazer uma poção polissuco?",
    archive: false,
    user: "Hermione Granger"
  }];

  return (
    <section>
      {
        questions
          .map((question, index) => <QuestionCard key={ index } question={ question } />)
      }
    </section>
  );
}

export default QuestionList;
