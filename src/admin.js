import React, { useState, useEffect } from "react";
import Users from "./profiles"; // Assuming you have a profiles.js file
import Analize from "./adminAnalysis";

export default function Admin() {
  const [userList, setUserList] = useState(Users);
  const [editedUser, setEditedUser] = useState(null);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    setUserList(Users);
  }, []);

  const deleteProfile = (userID) => {
    const updatedUserList = userList.filter(user => user.ID !== userID);
    setUserList(updatedUserList);
    Users=updatedUserList;
  };


  const editProfile = (userID) => {
    const selectedUser = Users.find(user => user.ID === userID);
    setEditedUser(selectedUser);
    setEditingMode(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUserList = userList.map(user => {
      if (user.ID === editedUser.ID) {
       
        return editedUser;
      }
     return user;
    });


    setUserList(updatedUserList);
    setEditingMode(false);
    setEditedUser(null);
  };




// Function to calculate gradient color based on a percentage value
function calculateGradientColor(percentage) {
  if (percentage === 50) {
    return null;
  } 
  else if (percentage > 50) {
    const green = Math.round(255 * percentage /100);
    console.log(SVGRadialGradientElement)
    return `radial-gradient(circle, rgba(${green}, 255, ${green}, 0.6), transparent)`;
  } 
  else if (percentage < 50) {
    const red = Math.round(255 * percentage /100);
    console.log(red)
    return `radial-gradient(circle, rgba(255, ${red}, ${red}, 0.6), transparent)`;
  }
}

  



  const feedBoxMaxHeight = editingMode ? "50%" : "80vh";
  return (
    <div>
      <Analize/>
      <div className={`feed-box ${editingMode ? "editing" : ""}`}>
          <h2>User List</h2>
          {userList.map((user, index) => (
            <div key={user.ID} className="user-info-box" style={{ background: calculateGradientColor(((user.income / 75000)*100),user.Id, user.income) }}>
  
                <p>User number: {user.ID}</p>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Age: {user.age}</p>
                <p>Income: {user.income}</p>
                <p>Password: {user.password}</p>
                <div>
                  <button onClick={() => editProfile(user.ID)}>Edit Profile Info</button>
                  <button onClick={() => deleteProfile(user.ID)}>Remove From List</button>
                </div>
            
            </div>
          ))}
        </div>



      {editingMode && (
        <div className="edit-profile">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            placeholder="User Name"
            value={editedUser.username || ""}
            name="username"
            type="text"
            onChange={handleChange}
          />
          <input
            className="input-field"
            placeholder="First Name"
            value={editedUser.firstName || ""}
            name="firstName"
            type="text"
            onChange={handleChange}
          />
          <input
            className="input-field"
            placeholder="Last Name"
            value={editedUser.lastName || ""}
            name="lastName"
            type="text"
            onChange={handleChange}
          />
          <input
            className="input-field"
            placeholder="Age"
            value={editedUser.age || ""}
            name="age"
            type="number"
            onChange={handleChange}
          />
          <input
            className="input-field"
            placeholder="Yearly Income"
            value={editedUser.income || ""}
            name="income"
            type="number"
            onChange={handleChange}
          />
          <input
            className="input-field"
            placeholder="Password"
            value={editedUser.password || ""}
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button className="save-button" type="submit">Save Changes</button>
        </form>
        </div>
      )}
    </div>
  );
}