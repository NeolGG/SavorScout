import React from "react"

const RestaurantRecForm = ({onChange}) =>{
    return (
    <div>
      <hr />
      This is the main form child component.
      <form>
        <select onChange={onChange}>
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
      </form>
    </div>
  );
}

export default RestaurantRecForm