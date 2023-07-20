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
    const Cuisine = Parse.Object.extend("Cuisine");
    const query = new Parse.Object.Query(Cuisine)
    query.equalTo("Cusine",name);
    return query.find().then((results) => {
        return results;
    });
}