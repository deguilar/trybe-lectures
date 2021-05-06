import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions(props) {
  const solutionId = props.match.params.solutionId;

  if (solutionId) return <h2>{solutionId}</h2>;

  return (
    <section>
      <h1>Gabaritos</h1>
      <div className="solutions">
        {props.availableSolutions.map((solution) => (
          <div key={solution} className="solution-link">
            <Link to={`/solutions/${solution}`}>
              {solution}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Solutions;