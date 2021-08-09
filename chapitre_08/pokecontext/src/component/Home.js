import { useState, useEffect } from "react";

const Home = props => {

	const [pokedex, setPokedex] = useState({});
	const [pokemonID, setPokemonID] = useState(0)


	useEffect(() => {
		
		if (pokemonID > 0) {

			const getPokedex = async () => {
				console.log("On cherche dans l'API")
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
				const data = await res.json()
				console.log(data)
				setPokedex(data)
			}

			getPokedex()
		}

	}, [pokemonID])

	const handleClick = data => {
		setPokemonID(Math.floor(Math.random() * (898)) + 1)
	}

	console.log()
	
	return (
		<div>
			<h1>HOME</h1>
			<button onClick={handleClick} className="btn btn-primary">Get a Pokemon</button>

			{
				Object.entries(pokedex).length > 0
				?
					<div className="card mt-5 w-50">
						<img src={pokedex.sprites.back_default} alt={pokedex.name} />
						<div className="card-body">
							<h5>{pokedex.name}</h5>
							<p>Height : {pokedex.height}</p>
							<p>Weight : {pokedex.weight}</p>
							<p>Types :</p>
							<ul>
								{ pokedex.types.map( obj => <li>{obj.type.name}</li> ) }
							</ul>
							
						</div>
					</div>

				: null
			}
			
			
		</div>
					
	)
}

export default Home
