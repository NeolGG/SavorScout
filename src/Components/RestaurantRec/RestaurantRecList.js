import React from 'react';

const RestaurantRecList = ({ restaurants }) => {
  const handleRestaurantClick = (restaurantId) => {
    console.log("Restaurant clicked! ID:", restaurantId);
    
  };
  return (
    <div>
      <hr />
      These are Restaurants
      <div>
        <p> </p>
        {restaurants.length > 0 && (
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <a href={`/`} >
                <div className="restaurant-card" key={"1" + restaurant.id} onClick={() => handleRestaurantClick(restaurant.id)}>
                  <img src={restaurant.get("image")} alt={restaurant.get("Name")} className="restaurant-image" />
                  <div className="restaurant-info">
                    {restaurant.get("Name")} | {restaurant.get("Cuisine")} | {restaurant.get("Service")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default RestaurantRecList;
