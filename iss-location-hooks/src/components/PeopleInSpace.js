import React, { useContext } from 'react';
import ISSContext from '../context/ISSContext';
import useTimer from '../effects/useTimer';

const TEN_SECONDS = 10000;
function PeopleInSpace() {
  const { getPeopleInSpace, peopleInSpace } = useContext(ISSContext);

  useTimer(getPeopleInSpace, TEN_SECONDS);

  return (
    <section className="people-in-space">
      <span>{`Atualmente há ${peopleInSpace.length} pessoas no espaço`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => <li key={ name }>{name}</li>)}
      </ul>
    </section>
  );
}

export default PeopleInSpace;
