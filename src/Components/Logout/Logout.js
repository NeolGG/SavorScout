import React from 'react'
import { logOutUser } from '../../common/services/AuthService'
import './Logout.css'; // Import the CSS

export default function Logout() {
    const handleLogout = async () => {
      await logOutUser();
    };
  
    return (
      <div>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </div>
    );
}
