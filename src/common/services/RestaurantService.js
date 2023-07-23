import Parse from "parse";

export let RestCont = {};
RestCont.collection = [];

export const getAllRestaurants = () => { // exports queries for filtering in "restaurantRec"
    const Restaurant = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Restaurant);
    console.log("query",query);
    return query;
};

export const getAllVerifiedRatings = () => {
    const Rating = Parse.Object.extend("Rating"); 
    const query = new Parse.Query(Rating); //Ratings Query
    query.include("Restaurant");
    query.include("User");
    query.find().then((results)=>{
        console.log("reuslts",results);
    })

    const User = Parse.Object.extend("User"); // makes new object with the user class
    const userQuery = new Parse.Query(User); // gets query of users 
    userQuery.equalTo("Verified", true); // filters out only verified users
    
    query.matchesQuery("User", userQuery); // Add this line to filter by the "Verified" attribute of the User class 

    return query.find().then((results) => {
        return results;
    });
}

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