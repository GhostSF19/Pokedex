import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Pokepage.css';

const Pokepage = () => {
  const [allPokemon, setAllPokemon] = useState([]); // full list of Pokémon names + URLs
  const [currentPage, setCurrentPage] = useState(1);
  const [pagedPokemon, setPagedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const limit = 20;

  // Step 1: Fetch full list once
  useEffect(() => {
    const fetchAllPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
        const data = await response.json();

        // Sort alphabetically
        const sorted = data.results.sort((a, b) => a.name.localeCompare(b.name));
        setAllPokemon(sorted);
      } catch (err) {
        console.error(err);
        setError('Failed to load Pokémon list');
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemon();
  }, []);

  // Step 2: Paginate and fetch details for current page
  useEffect(() => {
    const fetchDetails = async () => {
      if (allPokemon.length === 0) return;

      setLoading(true);
      const start = (currentPage - 1) * limit;
      const end = start + limit;
      const currentSlice = allPokemon.slice(start, end);

      try {
        const detailedData = await Promise.all(
          currentSlice.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
          )
        );
        
        setPagedPokemon(detailedData);
      } catch (err) {
        console.error(err);
        setError('Failed to load Pokémon details');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [allPokemon, currentPage]);

  const totalPages = Math.ceil(allPokemon.length / limit);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="page-container">
      <h1>Pokepage</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <div className="pokemon-list">
            {pagedPokemon.map((pokemon) => (
              <button
                key={pokemon.id}
                className="pokemon-button"
                onClick={() => navigate(`/details/${pokemon.id}`)}
              >
                {pokemon.name.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokepage;
