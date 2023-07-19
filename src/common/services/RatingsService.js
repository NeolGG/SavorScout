import Parse from "parse";

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
    const query = new Parse.Query(Rating);
    query.include("Restaurant");
    query.include("User");
    // query.equalTo("User.Verified", true); // Add this line to filter by the "Verified" attribute
    return query.find().then((results) => {
        return results;
    });
}