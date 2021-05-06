import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

function Solutions(props) {
  const solutionId = props.match.params.solutionId;

  if (solutionId) return <h2>{solutionId}</h2>;

  return (
    <section className="solutions">
      <h1>Gabaritos</h1>
      <ul>
        {props.availableSolutions.map((solution) => (
          <li key={solution}>
            <Link to={`/solutions/${solution}`}>
              {solution}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Solutions;