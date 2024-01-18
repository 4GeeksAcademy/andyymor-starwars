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
	
		let response = await fetch("https://swapi.dev/api/planet/" + id)
		let data = await response.json() 
		setplanet(data)

	}
	getplanet();
},[])  
	return (
		<div className="container">
			<h1>Name:{planet.name}</h1>
			<h3>Hair Color:{planet.hair_color}</h3>
			<h3>Height:{planet.height}</h3>
			<h3>Mass:{planet.mass}</h3>
			<h3>Eye Color:{planet.eye_color}</h3>
		</div>
	);
};
