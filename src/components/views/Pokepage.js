import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Pokepage.css'; // Update the import path for the CSS file

const Pokepage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const totalPokemon = 1010; // Total number of Pokémon in the API
        const randomIds = Array.from({ length: 20 }, () => Math.floor(Math.random() * totalPokemon) + 1);
        const promises = randomIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) => response.json())
        );
        const data = await Promise.all(promises);
        setPokemonList(data);
      } catch (error) {
        console.error('Failed to fetch Pokémon', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPokemon();
  }, []);

  return (
    <div className="page-container">
      <h1>Pokepage</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => (
            <button
              key={pokemon.id}
              className="pokemon-button"
              onClick={() => navigate(`/details/${pokemon.id}`)}
            >
              {pokemon.name.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokepage;
