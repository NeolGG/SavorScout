import React from 'react';

const UserProfile = () => {
  const user = {
    name: "User Name",
    email: "user@example.com"
    // other user info
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* Display other user info */}
    </div>
  );
}

export default UserProfile;
