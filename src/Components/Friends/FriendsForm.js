import React from "react";

const FriendsForm = ({ friendChange, onSubmit }) => {
    return (
        <div>
            <hr />
            <form onSubmit={onSubmit}>

                <label>
                    Add a Friend
                    <input
                        type="text"
                        placeholder="Friend Email"
                        onChange ={friendChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FriendsForm;


