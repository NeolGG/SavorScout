import { useState, useEffect,React } from 'react';
import { getAllVerifiedUsers, VerifiedCont } from '../../common/services/VerifiedService';
import VerifiedList from './VerifiedList';

export default function Verified() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (VerifiedCont.collection.length) {
      setUsers(VerifiedCont.collection);
    } else {
      getAllVerifiedUsers().then((users) => {
        console.log(users);
        setUsers(users);
      });
    }
  }, []);

  return (
    <div>
      Verified Users
      <VerifiedList users = {users}/>
    </div>
  )
}
