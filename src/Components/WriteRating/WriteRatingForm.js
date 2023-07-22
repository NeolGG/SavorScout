import React from "react";

const WriteRatingForm= ({ ratingChange, restChange, restaurants, onSubmit}) => {
    //sorts alphabetically
    const sortedRestaurants = restaurants.sort((a, b) =>
    a.get("Name").localeCompare(b.get("Name"))
  );

  return (
    <div className="form-container">
      <hr />
      Make a review
      <hr />
      <form onSubmit ={onSubmit}>
        <label>
        Restaurant:
      {sortedRestaurants.length > 0 && (
          <select name = "restaurant" onChange ={restChange}>
            <option value ="">Select a restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={"1" + restaurant.id} value = {restaurant.get("Name")}>
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
          <select name ="rating" onChange={ratingChange}>
            <option value={""}></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WriteRatingForm;
