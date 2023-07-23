import React from "react";
import './RestaurantRec.css'; // Make sure to import the CSS file

const RestaurantRecForm = ({onChange}) =>{
  const handleFilterChange = (event) => {
    const {name, value} = event.target;
    onChange(name,value);
  };
  return (
    <div className="filter-container">
      <hr />
      Filters
      <form>
        <select name = "cuisine" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="American">American</option>
          <option value="Italian">Italian</option>
          <option value="French">French</option>
          <option value="Irish">Irish</option>
          <option value="Mexican">Mexican</option>
          <option value="Japanese">Japanese</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Greek">Greek</option>
          <option value="Thai">Thai</option>
        </select>
        <select name = "service" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="fast food">Fast Food</option>
          <option value="dine-in">Dine-in</option>
        </select>
        <select name = "price" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </form>
    </div>
  );
}

export default RestaurantRecForm;
