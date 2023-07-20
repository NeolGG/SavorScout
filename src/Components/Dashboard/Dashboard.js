import React from 'react';
import Ratings from '../NewRatings/NewRatings';
import Verified from '../Verified/Verified';
import SearchBar from './SearchBar';
import FriendList from './FriendList';
import UserProfile from './UserProfile';

const Dashboard = () => {
  return (
    <div>
      <UserProfile />
      <SearchBar />
      <Ratings />
      <Verified />
      <FriendList />
    </div>
  );
}

export default Dashboard;
