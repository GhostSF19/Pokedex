// DetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams(); // Get the Pokémon ID from the URL
  const [pokemon, setPokemon] = useState(null); // State to hold Pokémon details
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon details');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  return (
    <div className="details-container">
      <h1>Details Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name}
            style={{ width: '150px', height: '150px' }}
          />
          <p>
            <strong>HP:</strong> {pokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat}
          </p>
          <p>
            <strong>Attack:</strong> {pokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat}
          </p>
          <p>
            <strong>Defense:</strong> {pokemon.stats.find((stat) => stat.stat.name === 'defense').base_stat}
          </p>
          <p>
            <strong>Special Attack:</strong> {pokemon.stats.find((stat) => stat.stat.name === 'special-attack').base_stat}
          </p>
          <p>
            <strong>Special Defense:</strong> {pokemon.stats.find((stat) => stat.stat.name === 'special-defense').base_stat}
          </p>
          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
