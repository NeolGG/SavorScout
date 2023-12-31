import React, { useEffect, useState } from 'react';
import { getCurrentUser, getAllFriends } from '../../common/services/FriendsService';
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';
import { addFriend } from '../../common/services/FriendsService';
import './Friends.css'; // Import the updated Friends.css file
import HomeButton from '../HomeButton/HomeButton';

export default function Friends() {
  const [user, setUser] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      getAllFriends().then((friends) => {
        setFriends(friends);
      })
    });
  }, []);

  const [temp, setTemp] = useState("");

  const handleFriendChange = (event) => {
    console.log("email",event.target.value);
    setTemp(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (temp === "") {
      console.log("enter an email");
    } else {
      addFriend(temp);
    }
  }

  return (
    <div className="friends-container"> {/* Use the friends-container class */}
         <HomeButton/>
      <h1 className="friends-header">{user.length > 0 ? user[0].attributes.firstName : ''}'s Friends</h1> {/* Use the friends-header class */}
      <hr /> {/* Add a line above the header */}
      <FriendsList friends={friends} />
      <hr /> {/* Add a line below the header */}
      <FriendsForm onSubmit={handleOnSubmit} friendChange={handleFriendChange}/>
    </div>
  );
}
