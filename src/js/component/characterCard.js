import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const CharacterCard = () => {
	const { store, actions } = useContext(Context);
const [characters,setCharacters] = useState([])
useEffect(()=>{
	async function getCharacters() {
		let response = await fetch("https://swapi.dev/api/people")
		let data = response.json() 
		setCharacters(data)
	}
},[])  
	return (
		<div className="container">
			{characters?.map((character, index)=>(
				<div class="card" style="width: 18rem;">
				  <div class="card-title">{character.name}></div>
				  <Link
					to={`/characterdescription/` + (index + 1)}
					className="btn btn-light text-dark"
				  >
					Learn More!
				  </Link>
				  </div>
				
			))}
		</div>
	);
};
