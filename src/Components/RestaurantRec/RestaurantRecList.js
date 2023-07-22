import React from 'react';

const RestaurantRecList = ({ restaurants }) => {
  const handleRestaurantClick = (restaurantId) => {
    console.log("Restaurant clicked! ID:", restaurantId);
  };

  return (
    <>
      {restaurants.length > 0 && (
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <a href={`/`} key={"1" + restaurant.id}>
              <div className="restaurant-card" onClick={() => handleRestaurantClick(restaurant.id)}>
                <img src={restaurant.get("image")} alt={restaurant.get("Name")} className="restaurant-image" />
                <div className="restaurant-info">
                  {restaurant.get("Name")} | {restaurant.get("Cuisine")} | {restaurant.get("Service")}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default RestaurantRecList;
