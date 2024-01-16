import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const CharacterDescription = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	const [character,setCharacter] = useState([])
useEffect(()=>{
	async function getCharacter() {
	
		let response = await fetch("https://swapi.dev/api/people/" + id)
		let data = await response.json() 
		setCharacter(data)

	}
	getCharacter();
},[])  
	return (
		<div className="container">
			<h1>Name:{character.name}</h1>
			<h3>Hair Color:{character.hair_color}</h3>
			<h3>Height:{character.height}</h3>
			<h3>Mass:{character.mass}</h3>
			<h3>Eye Color:{character.eye_color}</h3>
		</div>
	);
};
