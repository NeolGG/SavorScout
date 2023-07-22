import { React ,useEffect,useState } from 'react';
import { getCurrentUser, getAllFriends } from '../../common/services/FriendsService'
import FriendsList from './FriendsList';

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


  return (
    <div>
      <h1>{user.length > 0 ? user[0].attributes.firstName : ''}'s Friends</h1>
      <FriendsList friends={friends}/>
      </div>
  )
}
