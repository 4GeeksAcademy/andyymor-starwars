import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import {Planet} from "../component/planet";
import {Starship} from "../component/starship";
export const Home = () => (
	<div className="text-center mt-5">
		< CharacterCard />
		< Planet />
		< Starship />
	</div>
);
