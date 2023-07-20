import Parse from "parse";

export let RestCont = {};
RestCont.collection = [];

export const getAllRestaurants = () => {
    const Restaurant = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Restaurant);
    return query.find().then((results) => {
        return results;
    });
};

export const getCuisinebyName = (name) => {
    const Cuisine = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Cuisine)
    query.equalTo("Cuisine",name);
    return query.find().then((results) => {
        return results;
    });
};