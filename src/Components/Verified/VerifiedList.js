const VerifiedList = ({ users }) => {
  return (
    <div>
      <hr />
      These are the verified users
      <div>
        <p> </p>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={"1" + user.id}> 
                {" "}
                {user.get("firstName") }  {user.get("lastName") }
              </li> 
            ))}
          </ul>
        )}
      </div>{" "}
      <hr />
    </div>
  );
}

export default VerifiedList;
