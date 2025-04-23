import React from "react";
import "./Gallery.css";

const images = ["beach.jpg", "mountain.jpg", "city.jpg", "forest.jpg"];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={`/images/${img}`} alt={`Location ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
