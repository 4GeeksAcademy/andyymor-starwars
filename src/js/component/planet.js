import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planet = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    async function getPlanets() {
      let response = await fetch("https://swapi.dev/api/planets");
      let data = await response.json();
      setPlanets(data.results);
    }
    getPlanets();
  }, []);
  function handleFavorites(item) {
    if (store.favorites.includes(item)) {
      actions.deleteFavorites(item);
    } else {
      actions.addFavorites(item);
    }
  }
  console.log(planets);
  return (
    <div className="container d-flex col-12 overflow-auto mt-5 justify-content-center">
      {planets?.map((planet, index) => (
        <div class="card" style={{ minWidth: "18rem" }}>
          <div class="card-title">{planet.name}</div>
          <Link
            to={`/planetdescription/` + (index + 1)}
            className="btn btn-light text-dark"
          >
            Learn More!
          </Link>
          <button onClick={() => handleFavorites(planet.name)}>❤️</button>
        </div>
      ))}
    </div>
  );
};
