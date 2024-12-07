import React, { useState } from 'react';
import './StarRating.css';  // Importing the CSS file

const StarRating = () => {
  const [rating, setRating] = useState(0);  // Store the selected rating
  const [hover, setHover] = useState(0);    // Store the star being hovered on

  const renderStars = () => {
    return [...Array(5)].map((star, index) => {
      index += 1;
      return (
        <button
          key={index}
          type="button"
          className={index <= (hover || rating) ? "on" : "off"}
          onClick={() => setRating(index)}  // Set the rating on click
          onMouseEnter={() => setHover(index)}  // Highlight stars on hover
          onMouseLeave={() => setHover(rating)}  // Reset stars when not hovering
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span className="star" style={{ fontSize: '30px' }}>&#9733;</span>
        </button>
      );
    });
  };

  return (
    <div>
      {renderStars()}
      <p>Rating: {rating} out of 5</p>
    </div>
  );
};

export default StarRating;
