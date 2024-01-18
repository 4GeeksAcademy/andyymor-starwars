import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const StarshipDescription = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	const [starship,setStarships] = useState([])
    function findNewId(oldID) {
        const idMap = {
          1: 2,
          2: 3,
          3: 5,
          4: 9,
          5: 11,
          6: 12,
          7: 13,
          8: 15,
          9: 17
        };
        return idMap[oldID] || null;
      }
useEffect(()=>{
	async function getStarships() {
        let updatedID = findNewId(id)
		let response = await fetch("https://swapi.dev/api/starships/" + updatedID)
		let data = await response.json() 
		setStarships(data)

	}
	getStarships();
},[])  
	return (
		<div className="container">
			<h1>Name:{starship.name}</h1>
			<h3>Model:{starship.model}</h3>
			<h3>Passengers:{starship.passengers}</h3>
			<h3>Cargo Capacity:{starship.cargo_capacity}</h3>
			<h3>Manufacturer:{starship.manufacturer }</h3>
		</div>
	);
};
