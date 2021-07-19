import React, { useEffect, useState } from 'react';
import queryString from 'query-string';


function Planets() {
  const [planets, setPlanets] = useState([]);
	const [orderByColumn, setOrderByColumn] = useState('name');
	const [orderDirection, setOrderDirection] = useState('asc');
	const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let { page, orderBy } = queryString.parse(window.location.search);
		if (page) setCurrentPage(+page);	
		if (orderBy) setOrderByColumn(orderBy);	
  }, []);

	useEffect(() => {
		let url = `http://localhost:3001/planets?orderBy=${orderByColumn}&orderDirection=${orderDirection}&page=${currentPage}`;
		
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
				setPlanets(data.planets);
        setIsLoading(false);
      });
	}, [currentPage, orderByColumn, orderDirection])

	const handleChange = (e) => {
		setOrderByColumn(e.target.value);
		setCurrentPage(1);
	}

	const handleOrderDirection = (e) => {
		setOrderDirection(e.target.value);
		setCurrentPage(1);
	}

	if (isLoading) return (<div>Carregando...</div>);

  return (
    <div>
			<div class='row'>
				<label>Ordenar por</label>
				<div class="col-sm-6">
					<select onChange={handleChange} value={orderByColumn} class='form-select'>
						<option value='name'>Nome</option>
						<option value='rotation_period'>Período de rotação</option>
						<option value='orbital_period'>Período de órbita</option>
						<option value='diameter'>Diâmetro</option>
						<option value='population'>População</option>
					</select>
				</div>
				<div class="col-sm-6">
					<select onChange={handleOrderDirection} value={orderDirection} class='form-select'>
						<option value='asc'>CRESCENTE</option>
						<option value='desc'>DECRESCENTE</option>
					</select>
				</div>
			</div>
			<hr />
			<div className="row">
				<h3>Planetas</h3>
				<table class='table table-striped'>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Período de rotação</th>
							<th>Período de órbita</th>
							<th>Diâmetro</th>
							<th>População</th>
						</tr>
					</thead>
					<tbody>
						{planets.map((planet) => (
							<tr key={planet.id}>
								<td>{planet.name}</td>
								<td>{planet.rotation_period}</td>
								<td>{planet.orbital_period}</td>
								<td>{planet.diameter}</td>
								<td>{planet.population}</td>
							</tr>
						))}
					</tbody>
					
				</table>

				<ul className="pagination">
					<li className="page-item"><a href={`?page=${currentPage - 1}&orderBy=${orderByColumn}`} class='page-link'>Anterior</a></li>
					<li className="page-item"><a href={`?page=${currentPage + 1}&orderBy=${orderByColumn}`} class='page-link'>Próximo</a></li>
				</ul>
			</div>
    </div>
  );
}

export default Planets;
