import React from 'react';

function Solution(props) {
  const { match: { params: { solutionId } } } = props;

  return (
    <section>
      <h2>{solutionId}</h2>
    </section>
  )
}

export default Solution;