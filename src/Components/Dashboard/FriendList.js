import React, { useState, useEffect } from 'react';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  // Imagine you have a service to fetch friends
  useEffect(() => {
    // fetchFriends().then(setFriends);
  }, []);

  return (
    <div>
      <h2>Friends</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
