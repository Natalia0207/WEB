import React from 'react';
const GifItem = ({ id, tittle, url }) => {
  return (
    <div className="gif-item">
      <h3>{tittle}</h3>
      <img src={url} alt={tittle} />
    </div>   )
}
export default GifItem;
