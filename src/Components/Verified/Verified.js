import React, { useState, useEffect } from 'react';
import { getAllVerifiedUsers, VerifiedCont } from '../../common/services/VerifiedService';
import VerifiedList from './VerifiedList';
import { RatingsCont } from '../../common/services/RatingsService';

const Verified = () => {
  const [users, setUsers] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (VerifiedCont.collection.length) {
      setUsers(VerifiedCont.collection);
      filterRatings(VerifiedCont.collection);
    } else {
      getAllVerifiedUsers().then((users) => {
        setUsers(users);
        filterRatings(users);
      });
    }
  }, []);

  const filterRatings = (users) => {
    const verifiedUserIds = users.map(user => user.id);
    const filteredRatings = RatingsCont.collection.filter(rating => verifiedUserIds.includes(rating.get("User").id));
    setRatings(filteredRatings);
  };

  return (
    <div>
      <h2>Verified Users</h2>
      <VerifiedList users={users} ratings={ratings} />
    </div>
  );
}

export default Verified;
