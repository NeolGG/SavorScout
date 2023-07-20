import React from "react"

const RestaurantRecForm = () =>{
    return (
    <div>
      <hr />
      This is the main form child component.
      <form>
        <select>
          <option value="">Select an option</option>
          <option value="fast food">Fast Food</option>
          <option value="dine-in">Dine-In</option>
        </select>
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RestaurantRecForm