import React from 'react';

const VerifiedList = ({ users }) => {
  return (
    <div className="verified-container">
      <h1 className="verified-title">⭐ Verified Users ⭐</h1>
      {users.length > 0 && (
        <div className="verified-grid">
          {users.map((user) => (
            <a href={`/`} key={"1" + user.id}>
              <div className="verified-card">
                <img src={user.get("image")} alt={`${user.get("firstName")} ${user.get("lastName")}`} className="verified-image" /> 
                <div className="verified-info">
                  {user.get("firstName")} {user.get("lastName")}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default VerifiedList;
