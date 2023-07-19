import Parse from "parse";

export let Ratings = {};
Ratings.collection = [];

export const getAllRatings = () => {
    const Rating = Parse.Object.extend("Rating");
    const query = new Parse.Query(Rating);
    query.include("Restaurant"); //allows pointer to be read
    query.include("User"); // allows pointer to be read
    return query.find().then((results) => {
        return results;
    });
};