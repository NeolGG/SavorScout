// VerifiedList.js
import React, { useState, useEffect } from 'react';
import { getAllVerifiedUsers, Verified } from '../../common/services/VerifiedService';

const VerifiedList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (Verified.collection.length) {
      setUsers(Verified.collection);
    } else {
      getAllVerifiedUsers().then((users) => {
        console.log(users);
        setUsers(users);
      });
    }
  }, []);

  return (
    <div>
      <hr />
      These are the verified users
      <div>
        <p> </p>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={"1" + user.id}> 
                {" "}
                {user.id} | {user.get("username")} | {user.get("email")}
              </li> 
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
}

export default VerifiedList;
