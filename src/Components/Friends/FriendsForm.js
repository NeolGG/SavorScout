import React from "react";

const FriendsForm = ({ friendChange, onSubmit }) => {
    return (
        <div className="friends-form"> {/* Use the friends-form class */}
        <form onSubmit={onSubmit}>
          <label className="friends-input"> {/* Use the friends-input class */}
            Add a Friend
            <input
              type="text"
              placeholder="Friend Email"
              onChange={friendChange}
            />
          </label>
          <button type="submit" className="friends-submit"> {/* Use the friends-submit class */}
            Submit
          </button>
        </form>
      </div>
    );
};

export default FriendsForm;


