// VerifiedService.js
import Parse from "parse";

export let VerifiedCont = {};
VerifiedCont.collection = [];

export const getAllVerifiedUsers = () => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  query.equalTo("Verified", true); // querying for users who are verified
  return query.find().then((results) => {
    return results;
  });
};
