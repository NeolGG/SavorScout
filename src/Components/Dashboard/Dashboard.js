import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NewRatings from '../NewRatings/NewRatings';
import Verified from '../Verified/Verified';

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/newratings">New Ratings</Link>
        </li>
        <li>
          <Link to="/dashboard/verifiedusers">Verified Users</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Dashboard;
