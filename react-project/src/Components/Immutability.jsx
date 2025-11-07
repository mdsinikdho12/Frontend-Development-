import React, { useState } from "react";
import people from "../data/artiest";

function Immutability() {
  const [artists, setArtisits] = useState(people);

  const deleteArtist = (id) => {
    const fillteredArray = artists.filter((artist) => artist.id !== id);
    setArtisits(fillteredArray);
  };

  const addartist = () => {
    const user = { id: 4, name: "sinikdho" };
    const newrtists = [...artists, user];
    setArtisits(newrtists);
  };
  return (
    <div>
      <p>Imutablity</p>
      <button onClick={addartist}>add user</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button onClick={(e) => deleteArtist(artist.id)}>Detete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Immutability;
