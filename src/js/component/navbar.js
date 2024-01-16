import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
	{store.favorites.map((fav,index)=>(
		 <li key = {index}><a class="dropdown-item">{fav}</a><span onClick={()=>deleteFavorites(fav)}></span></li>
	))}
   
  </ul>
</div>
			</div>
		</nav>
	);
};


// c1. create planet card in componets folder
// 2.copy charavter card to planet card
// 3. where it is says character switch to planets
// 4. swtich api over to planets
// 5. make planet description by copying character description
// 6.route in layouts
// 7. import planet desc to layouts
// 8.repeat for star ships 
