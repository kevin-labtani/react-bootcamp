import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  // that's how you write an async function inside useEffect
  // useEffect only triggered  when number changes
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    }
    getData();
  }, [number]);

  return (
    <div>
      <h1>Pick a Movie</h1>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
    </div>
  );
}

export default SWMovies;
