import Parse from "parse";

export const getCurrentUser = () => {
    const user = Parse.User.current();
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.include("Friends");
    query.equalTo("objectId", user.id);
    return query.find().then((results) => {
        return results;
    });
};

export const getUserByID = (userID) =>{
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  query.equalTo("objectId", userID);
  return query.find().then((result) => {
    return result;
});
}

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
export const addFriend = (friendEmail) => {
  const user = Parse.User.current();
  const User = Parse.Object.extend('User');
  const query = new Parse.Query(User);

  query.equalTo('email', friendEmail);
  query.first().then((friend) => {
    if (!friend) {
      alert('Friend not found with email:' + friendEmail);
      return;
    }

    const friendsRelation = user.relation('Friends');
    const friends = friendsRelation.query();
    friends.equalTo('email', friendEmail);
    friends.first().then((existingFriend) => {
      if (existingFriend) { 
        alert('Friend is already on the list:' + friendEmail);
        return;
      }
      friendsRelation.add(friend);
      alert('Friend added:' + friendEmail);
      window.location.reload();
      return user.save(); // Save the updated user object with the new relation
    })
      .then(() => {
        return getAllFriends();
      })
      .catch((error) => {
        console.error('Error adding friend:', error);
      });
  });
};
