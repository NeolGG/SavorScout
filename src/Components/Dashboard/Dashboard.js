import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NewRatings from '../NewRatings/NewRatings';
import Verified from '../Verified/Verified';
import RestaurantRec from '../RestaurantRec/RestaurantRec';

const Dashboard = () => {
  return (
    <div>
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
      </ul>
      <Outlet />
    </div>
  );
}

export default Dashboard;
