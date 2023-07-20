import React from "react";

const WriteRatingForm= ({ ratingChange, restChange, onClick, restaurants}) => {
    //sorts alphabetically
    const sortedRestaurants = restaurants.sort((a, b) =>
    a.get("Name").localeCompare(b.get("Name"))
  );

  return (
    <div>
      <hr />
      Write a new review
      <hr />
      <form>
        <label>
        Restaurant:
      {sortedRestaurants.length > 0 && (
          <select onChange ={restChange}>
            <option value ="">Select a restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={"1" + restaurant.id} value = {restaurant.get("objectId")}>
                {restaurant.get("Name")}
              </option>
            ))}
          </select>
        )}
        </label>
        <br />
        <br />
        <label>
          Rating:
          <select onChange={ratingChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit" onChange={onClick}>Submit</button>
      </form>
    </div>
  );
};

export default WriteRatingForm;


