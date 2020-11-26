import React, { useEffect, useState } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const API_URL = 'https://swapi.dev/api';

  useEffect(() => {
    fetch(`${API_URL}/people/`)
      .then((data) => data.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      <h1>Characters</h1>
      <div>
        {characters.map((character) => (
          <div key={character.name}>
            <p>
              <strong>{character.name}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
