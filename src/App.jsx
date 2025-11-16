import React, { useEffect, useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");          // What user types
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debounce, setDebounce] = useState(search);

  useEffect(() => {
    const id = setTimeout(() => setDebounce(search), 400);
    return () => clearTimeout(id);
  }, [search]);

  useEffect(() => {
    if(!debounce) return;

  }, [debounce]);

  const handleSearch = async () => {
    if (!search) return;

    setLoading(true);
    setError(null);
    setPokemonData(null);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokémon not found");
      const data = await res.json();

      setPokemonData({
        name: data.name,
        sprite: data.sprites.front_default,
        stats: data.stats.map(s => ({
          name: s.stat.name,
          base: s.base_stat
        }))
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold mb-4">Pokémon Search</h1>

      {/* Search Input */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter Pokémon name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {if (e.key === 'Enter') handleSearch(); }}
          className="border px-3 py-1 rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-1 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {/* Display Section */}
      <div className="mt-4 w-80 border p-4 rounded">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600">{error}</div>}

        {pokemonData && (
          <>
            <img src={pokemonData.sprite} alt={pokemonData.name} className="mx-auto" />
            <h2 className="text-xl font-semibold capitalize mt-2">{pokemonData.name}</h2>

            <ul className="mt-2">
              {pokemonData.stats.map((s) => (
                <li key={s.name} className="flex justify-between">
                  <span className="capitalize">{s.name.replace("-", " ")}</span>
                  <span>{s.base}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
