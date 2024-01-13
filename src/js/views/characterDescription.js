import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const CharacterDescription = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();
	return (
		<div className="container">
			
		</div>
	);
};
