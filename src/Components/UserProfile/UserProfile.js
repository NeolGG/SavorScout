import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserByID } from '../../common/services/FriendsService';
import { getRatingsbyUserID } from '../../common/services/RatingsService';
import NewRatingsList from '../NewRatings/NewRatingsList';
import HomeButton from '../HomeButton/HomeButton';
import './UserProfile.css';


export default function UserProfile() {
    const {userId} = useParams();
    const [user, setUser] = useState();
    const [ratings, setRatings] = useState();

    useEffect(() => {
        getUserByID(userId).then((user) => {
            setUser(user);
        })
        getRatingsbyUserID(userId).then((ratings)=>{
            setRatings(ratings);
        })
    },[userId]);

    const pUser = user ? user[0].attributes :null;

    return (
        <div className="user-profile-page">
            <HomeButton/>
            <div>
            {pUser ? (
                <div>
                    <p>{pUser.firstName} {pUser.lastName} ({pUser.username})</p>
                    <p>City: {pUser.City}</p>
                    <p>State: {pUser.State}</p>
                </div>
            ) : (
                <p> </p>
            )}
            </div>
            <NewRatingsList ratings ={ratings}/>
        </div>
    )
}