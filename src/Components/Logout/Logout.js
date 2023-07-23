import React from 'react'
import { logOutUser } from '../../common/services/AuthService'

export default function Logout() {
    const handleLogout = async () => {
      await logOutUser();
    };
  
    return (
      <div>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }