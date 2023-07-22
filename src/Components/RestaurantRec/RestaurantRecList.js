import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantRecList = ({ restaurants }) => {
  const handleRestaurantClick = (restaurantId) => {
    console.log("Restaurant clicked! ID:", restaurantId);
  };

  return (
    <>
      {restaurants.length > 0 && (
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <Link to={`/restaurantprofile/${restaurant.id}`} key={"1" + restaurant.id}>
              <div className="restaurant-card" onClick={() => handleRestaurantClick(restaurant.id)}>
                <img src={restaurant.get("image")} alt={restaurant.get("Name")} className="restaurant-image" />
                <div className="restaurant-info">
                  {restaurant.get("Name")} | {restaurant.get("Cuisine")} | {restaurant.get("Service")}
                </div>
              </div>
              </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default RestaurantRecList;
