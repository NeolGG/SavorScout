import './Verified.css';
import React, { useState, useEffect } from 'react';
import { getAllVerifiedUsers, VerifiedCont } from '../../common/services/VerifiedService';
import VerifiedList from './VerifiedList';
import { RatingsCont } from '../../common/services/RatingsService';

const Verified = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (VerifiedCont.collection.length) {
      setUsers(VerifiedCont.collection);
    } else {
      getAllVerifiedUsers().then((users) => {
        setUsers(users);
      });
    }
  }, []);

  return (
    <div>
      <VerifiedList users={users} />
    </div>
  );
}

export default Verified;
