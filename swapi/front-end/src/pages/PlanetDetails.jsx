import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useParams } from 'react-router-dom';


function PlanetDetails() {
	const [planet, setPlanet] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		fetch(`http://localhost:3001/planet/${id}`)
			.then(resp => resp.json())
			.then((data) => {
				console.log(data);
				setPlanet(data.planet);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) return (<div>Carregando...</div>)

  return (
		<div>
			<h3>Detalhes do Planeta #{id} - #{planet.name}</h3>

			<span>Período de órbita: {planet.orbital_period}</span><br/>
			<span>Período de rotação: {planet.rotation_period}</span><br/>
			<span>Diâmetro: {planet.diameter}</span><br/>
			<span>Clima: {planet.climate}</span><br/>

			<Link to="/people">Voltar para lista de pessoas</Link>
		</div>
	);
}

export default PlanetDetails;
