import React, {useEffect,useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import NewRatings from '../NewRatings/NewRatings';
import Verified from '../Verified/Verified';
import RestaurantRec from '../RestaurantRec/RestaurantRec';
import { getCurrentUser } from '../../common/services/FriendsService';

const Dashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      console.log("user",user[0].attributes.firstName);
    });
  }, []);

  return (
    <div>
      <h1>SavorScout </h1>
      <hr />
      <h2>Welcome {user.length > 0 ? user[0].attributes.firstName : ''}</h2> 
      {/* only loads in name if the data is  */}
      <ul>
        <li>
          <Link to="/newratings">New Ratings</Link>
        </li>
        <li>
          <Link to="/verifiedusers">Verified Users</Link>
        </li>
        <li>
        <Link to="/restaurantrec">Restaurants</Link>
        </li>
        <li>
          <Link to="/verifiedratings">Verfied ratings</Link>
        </li>
        <li>
          <Link to="/writerating">Write Rating</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Dashboard;
