import React, { useState } from "react";
import Users from "./profiles";
import Analize from "./adminAnalysis";
import Admin from "./admin";

export default function ValidLog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [specificUser, setSpecificUser] = useState(null);
  const [userList, setUserList] = useState(Users); // Initialize with Users array

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate username and password
    const isValidAdmin = Users.find(
      (user) => user.userName === username && user.password === password && user.admin === true
    );

    const isValidUser = Users.find(
      (user) => user.userName === username && user.password === password
    );

    if (isValidAdmin) {
      alert("Admin login successful!");
      setLoggedIn(true);
      setSpecificUser(isValidAdmin);
    } else if (isValidUser) {
      alert("User login successful!");
      setLoggedIn(true);
      setSpecificUser(isValidUser);
    } else {
      alert("Invalid username or password.");
    }
  };

  const deleteProfile = (userID) => {
    const updatedUserList = userList.filter((user) => user.ID !== userID);
    setUserList(updatedUserList); // Update the state with the new user list
    const updatedUsers = Users.filter((user) => user.ID !== userID);
    Users.length = 0; // Clear the original array
    updatedUsers.forEach((user) => Users.push(user)); // Re-add updated users to the original array
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          {specificUser.admin ? (
            
            <div className="feed-box">
                  <Admin/>
            </div>
          ) : (
            <div>
              <h3>Profile Information:</h3>
              <p>First Name: {specificUser.firstName}</p>
              <p>Last Name: {specificUser.lastName}</p>
              <p>Age: {specificUser.age}</p>
              <p>Income: {specificUser.income}</p>
              <p>Password: {specificUser.password}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2> Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChangeUsername}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
          <button type="submit">Login</button>
        </form>
        <div className="account-section">
            <h2>Admin Account</h2>
            <div className="account-info">
              <div>User Name: Adam2001</div>
              <div>Admin Password: Adam2001</div>
            </div>
        </div>
        <div className="account-section">
            <h2>User Account</h2>
            <div className="account-info">
              <div>User Name: Jimpo</div>
              <div>Admin Password: Junior</div>
            </div>
        </div>
        <div className="account-section">
            <h2>Create Your Own</h2>
            <div className="account-info">
              <div>Create an account Then Sign in</div>
            
            </div>
        </div>

        </div>
      )}
    </div>
  );
}
