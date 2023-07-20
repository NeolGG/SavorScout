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

export const getServicebyName = (name) => {
    const Service = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Service)
    query.equalTo("Service",name);
    return query.find().then((results) => {
        return results;
    });
};

// get specific restaurant by name
export const getRestaurantbyName = (name) =>{
    //console.log("loooking for",name);
    const Restaurant = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Restaurant)
    query.equalTo("Name",name);
    return query.find().then((results) => {
        //console.log("found",results);
        return results;
    });
}