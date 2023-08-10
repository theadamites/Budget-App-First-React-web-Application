import React, { useState } from "react";
import Users from "./profiles"; // an array of profile data Objects

export default function User() {
  const [user, setUser] = useState({});

  function change(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Account Saved");

    const newUser = { ...user };
    newUser.ID = Users.length + 1; // Assign an ID based on array length
    Users.push(newUser); // Add the new user to the imported Users array
    setUser({}); // Clear the form inputs
  };


  return (
    <div>
            <h1>Create a Profile</h1>
      <h2>Enter the Following Information</h2>
      <form onSubmit={handleSubmit}>
      <input
          placeholder="User Name"
          value={user.userName || ""}
          name="userName"
          type="text"
          onChange={change}
        ></input>
        <input
          placeholder="First Name"
          value={user.firstName || ""}
          name="firstName"
          type="text"
          onChange={change}
        ></input>

        <input
          placeholder="Last Name"
          value={user.lastName || ""}
          name="lastName"
          type="text"
          onChange={change}
        ></input>

        <input
          placeholder="age"
          value={user.age || ""}
          name="age"
          type="number"
          onChange={change}
        ></input>

        <input
          placeholder="Yearly Income"
          value={user.income || ""}
          name="income"
          type="number"
          onChange={change}
        ></input>

        <input
          placeholder="Password"
          value={user.password || ""}
          name="password"
          type="Password"
          onChange={change}
        ></input>

        <button type="submit">Create Account</button>
      </form>

      <div>
        <h3>Entered Information:</h3>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Age: {user.age}</p>
        <p>Income: {user.income}</p>
        <p>password: {user.password}</p>
      </div>
      <div>


      </div>
    </div>
  );
}
