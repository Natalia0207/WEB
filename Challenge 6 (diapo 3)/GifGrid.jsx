import React, { useState, useEffect } from 'react';
import GifItem from './GifItem'; 
const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  const fetchGifs = async () => {
    const fetchedGifs = await fetchGifs(category);
    setGifs(fetchedGifs);
    console.log(fetchedGifs); 
  }
  useEffect(() => {
    fetchGifs(); },[category])
      return (
        <div className="gif-grid">
          <h2>{category}</h2>
          {gifs.map((gif) => (
            <GifItem key={gif.id} {...gif} /> ))
          }
        </div>
      )
}
export default GifGrid;

