import { React ,useEffect,useState } from 'react';
import { getCurrentUser, getAllFriends } from '../../common/services/FriendsService'
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';
import { addFriend } from '../../common/services/FriendsService';

export default function Friends() {
  const [user, setUser] = useState([]);
  const [friends,setFriends] = useState([]);

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
    if (temp == "") {
      console.log("enter an email");
    } else {
      addFriend(temp);
    }
  }

  return (
    <div>
      <h1>{user.length > 0 ? user[0].attributes.firstName : ''}'s Friends</h1>
      <FriendsForm onSubmit={handleOnSubmit} friendChange={handleFriendChange}/>
      <FriendsList friends={friends}/>
      </div>
  )
}
