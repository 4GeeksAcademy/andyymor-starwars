import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const Starship = () => {
	const { store, actions } = useContext(Context);
const [starships,setStarships] = useState([])
useEffect(()=>{
	async function getStarships() {
	
		let response = await fetch("https://swapi.dev/api/starships")
		let data = await response.json() 
		setStarships(data.results)

	}
	getStarships();
},[])  
function handleFavorites(item) {
	if(store.favorites.includes(item)){
		actions.deleteFavorites(item)
	}
	else{
		actions.addFavorites(item)
	}
}
console.log(starships)
	return (
		<div className="container d-flex col-12 overflow-auto mt-5 justify-content-center" >

			{starships?.map((starship, index)=>(
				<div class="card" style={{minWidth:"18rem"}}>
				  <div class="card-title">{starship.name}</div>
				  <Link
					to={`/starshipdescription/` + (index + 1)}
					className="btn btn-light text-dark"
				  >
					Learn More!
				  </Link>
				  <button onClick={()=>handleFavorites(starship.name)}>❤️</button>
				  </div>
				
			))}
		</div>
	);
};
