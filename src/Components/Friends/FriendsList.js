import React from 'react'

const FriendsList = ({friends}) => {
  return (
    <div>
      <hr />
      <div>
        <p> </p>
        {friends.length > 0 && (
          <ul>
            {friends.map((friend) => (
              <li key={"1" + friend.id}> 
                {" "}
                {friend.get("firstName")} {friend.get("lastName")} ({friend.get("username")})<br /> 
                {friend.get("City")}, {friend.get("State")} 
              </li> 
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
}

export default FriendsList;