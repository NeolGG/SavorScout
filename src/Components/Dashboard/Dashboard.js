import React, {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import { getCurrentUser } from '../../common/services/FriendsService';
import './Dashboard.css';
import Logout from '../Logout/Logout';

const Dashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      console.log("user",user[0].attributes.firstName);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1><Link to="/" className="title">SavorScout</Link></h1>
      <hr />
      <h2>Welcome {user.length > 0 ? user[0].attributes.firstName : ''}</h2> 
      {/* only loads in name if the data is there */}
      <ul>
        <li>
          <Link to="/newratings" className="button">New Ratings</Link>
        </li>
        <li>
          <Link to="/verifiedusers" className="button">Verified Users</Link>
        </li>
        <li>
          <Link to="/restaurantrec" className="button">Restaurants</Link>
        </li>
        <li>
          <Link to="/verifiedratings" className="button">Verified ratings</Link>
        </li>
        <li>
          <Link to="/writerating" className="button">Write Rating</Link>
        </li>
        <li>
          <Link to="/friends" className="button">Friends</Link>
        </li>
        <li>
          <Link to={`/profile/${user.length > 0 ? user[0].id : ''}`} className="button">Profile</Link>
        </li>
        <br/>
        <Logout/>
      </ul>
    </div>
  );
}

export default Dashboard;
