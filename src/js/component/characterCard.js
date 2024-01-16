import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const CharacterCard = () => {
	const { store, actions } = useContext(Context);
const [characters,setCharacters] = useState([])
useEffect(()=>{
	async function getCharacters() {
	
		let response = await fetch("https://swapi.dev/api/people")
		let data = await response.json() 
		setCharacters(data.results)

	}
	getCharacters();
},[])  
function handleFavorites(item) {
	if(store.favorites.includes(item)){
		actions.deleteFavorites(item)
	}
	else{
		actions.addFavorites(item)
	}
}
console.log(characters)
	return (
		<div className="container d-flex col-12 overflow-auto mt-5 justify-content-center" >

			{characters?.map((character, index)=>(
				<div class="card" style={{minWidth:"18rem"}}>
				  <div class="card-title">{character.name}</div>
				  <Link
					to={`/characterdescription/` + (index + 1)}
					className="btn btn-light text-dark"
				  >
					Learn More!
				  </Link>
				  <button onClick={()=>handleFavorites(character.name)}>❤️</button>
				  </div>
				
			))}
		</div>
	);
};
