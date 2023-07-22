import Parse from "parse";
import { getRestaurantbyID } from "./RestaurantService";

export let RatingsCont = {};
RatingsCont.collection = [];

export const getAllRatings = () => {
    const Rating = Parse.Object.extend("Rating");
    const query = new Parse.Query(Rating);
    query.include("Restaurant"); //allows pointer to be read
    query.include("User"); // allows pointer to be read
    return query.find().then((results) => {
        return results;
    });
};

export const getAllVerifiedRatings = () => {
    const Rating = Parse.Object.extend("Rating"); 
    const query = new Parse.Query(Rating); //Ratings Query
    query.include("Restaurant");
    query.include("User");

    const User = Parse.Object.extend("User"); // makes new object with the user class
    const userQuery = new Parse.Query(User); // gets query of users 
    userQuery.equalTo("Verified", true); // filters out only verified users
    
    query.matchesQuery("User", userQuery); // Add this line to filter by the "Verified" attribute of the User class 

    return query.find().then((results) => {
        return results;
    });
}

export const createRating = async (rating,ID)=>{
    const Rating = new Parse.Object("Rating");
    Rating.set("User",Parse.User.current());
    Rating.set("Rating",parseInt(rating));

    const restObject = await getRestaurantbyID(ID);

    Rating.set("Restaurant",restObject[0]);

    Rating.save().then((savedRating) => {
        console.log("Rating saved:", savedRating);
    }).catch((error) => {
        console.error("Error saving Rating:", error);
    });
}

export const getRatingsbyRestID = async (restID) => {
    const Rating = Parse.Object.extend("Rating");
    const query = new Parse.Query(Rating);
    query.include("Restaurant"); //allows pointer to be read
    query.include("User"); // allows pointer to be read

    const restObject = await getRestaurantbyID(restID);

    query.equalTo("Restaurant",restObject[0]);

    return query.find().then((results) => {
        console.log("results",results);
        return results;
    });

}