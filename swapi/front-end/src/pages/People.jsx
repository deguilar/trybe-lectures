import React, { useEffect, useState } from 'react';
import queryString from 'query-string';


function People() {
  const [people, setPeople] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let url = `http://localhost:3001/people`;
		
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
				setPeople(data.people);
				setIsLoading(false);
      });
	}, [])

	if (isLoading) return (<div>Carregando...</div>);

  return (
    <div>
			<div className="row">
				<h3>Pessoas</h3>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Altura</th>
							<th>Peso</th>
						</tr>
					</thead>
					<tbody>
						{people.map((person) => (
							<tr key={person.id}>
								<td>{person.name}</td>
								<td>{person.height}</td>
								<td>{person.mass}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
    </div>
  );
}

export default People;
