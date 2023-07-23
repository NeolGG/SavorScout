import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserByID } from '../../common/services/FriendsService';

export default function UserProfile() {
    const {userId} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        getUserByID(userId).then((user) => {
            setUser(user);
        })
    },[userId]);

    const pUser = user ? user[0].attributes :null;

    return (
        <div>
            {pUser ? (
                <div>
                    <p>{pUser.firstName}</p>
                </div>
            ) : (
                <p> </p>
            )}
        </div>
    )
}



    
