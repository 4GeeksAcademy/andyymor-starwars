import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const PlanetDescription = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	const [planet,setplanet] = useState([])
useEffect(()=>{
	async function getplanet() {
	
		let response = await fetch("https://swapi.dev/api/planets/" + id)
		let data = await response.json() 
		setplanet(data)

	}
	getplanet();
},[])  
	return (
		<div className="container">
			<h1>Name:{planet.name}</h1>
			<h3>Rotation Period:{planet.rotation_period}</h3>
			<h3>Gravity:{planet.gravity}</h3>
			<h3>Population:{planet.population}</h3>
			<h3>Surface Water:{planet.surface_water}</h3>
		</div>
	);
};
