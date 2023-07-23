import React from 'react';
import './Friends.css'; // Import the updated Friends.css file

const FriendsList = ({ friends }) => {
  return (
    <div className="friends-list"> {/* Use the friends-list class */}
      {friends.length > 0 && friends.map((friend) => (
        <div className="friends-item" key={"1" + friend.id}>
          <div className="friends-info"> {/* Use the friends-info class */}
            {friend.get("firstName")} {friend.get("lastName")}
            <br />
            ({friend.get("username")})
            <br />
            {friend.get("City")}, {friend.get("State")}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
