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

export const createRating = async (rating,ID)=>{
    const Rating = new Parse.Object("Rating");
    Rating.set("User",Parse.User.current());
    Rating.set("Rating",parseInt(rating));

    const restObject = await getRestaurantbyID(ID);

    Rating.set("Restaurant",restObject[0]);

    Rating.save().then((savedRating) => {
        console.log("Rating saved:", savedRating);
        alert('Rating added');
        window.location.reload();
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