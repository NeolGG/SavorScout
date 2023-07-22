import Parse from "parse";

export let RestCont = {};
RestCont.collection = [];

export const getAllRestaurants = () => { // exports queries for filtering in "restaurantRec"
    const Restaurant = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Restaurant);
    console.log("query",query);
    return query;
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


export const getRestaurantbyID = (ID) =>{ 
    //console.log("looking for",name);
    const Restaurant = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Restaurant)
    query.equalTo("objectId",ID);
    return query.find().then((results) => {
        //console.log("found",results);
        return results;
    });
}