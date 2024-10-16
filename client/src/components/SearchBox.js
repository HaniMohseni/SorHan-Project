// SearchResults.js
import React from "react";

const SearchBox = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Top 10 Best Restaurants Near {results.city}</h2>
      <ul>
        {results.restaurants.map((restaurant, index) => (
          <li key={index}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
