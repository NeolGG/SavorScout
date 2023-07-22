import Parse from "parse";

export const getCurrentUser = () => {
    const user = Parse.User.current();
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.include("Friends");
    query.equalTo("objectId", user.id); // querying for users who are verified
    return query.find().then((results) => {

        return results;
    });
};

export const getAllFriends = () => {
    const user = Parse.User.current();
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.equalTo("objectId", user.id); 
    query.include("Friends");
    return query.find().then((results) => {
        const currentUser = results[0];
        const friendsRelation = currentUser.relation("Friends");
        const friendsQuery = friendsRelation.query();
        return friendsQuery.find().then((friends) => {
          return friends;
        });
      });
}

