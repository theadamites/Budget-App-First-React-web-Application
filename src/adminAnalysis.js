import React, { useState, useEffect } from "react";
import Users from "./profiles";
import "./styles.css";

export default function Analize() {
  
  const [numOfProfiles, setNumOfProfiles] = useState(0);
  const [averageAge, setAverageAge] = useState(0);
  const [averageIncome, setAverageIncome] = useState(0);



  useEffect(() => {
    setNumOfProfiles(Users.length);
  }, [Users]);

  useEffect(() => {
    const totalAge = Users.reduce((sum, user) => sum + user.age, 0);
    setAverageAge(totalAge / Users.length);
  }, [Users]);

  useEffect(() => {
    const totalIncome = Users.reduce((sum, user) => sum + user.income, 0);
    setAverageIncome(totalIncome / Users.length);
  }, [Users]);




  return (
    <div className="analize-container">
      <div>Available Profiles: {numOfProfiles}</div>

      <div>
        Average Age: {Math.round(averageAge)||0} / 40 
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(averageAge / 40) * 100}%`}}
          >
            <div className="progress-text">
              AAG: 40 | {Math.round((averageAge / 40) * 100)||0}%
            </div>
          </div>
        </div>
        </div>

      <div>
        Average Income: {Math.round(averageIncome)||0} / 75,000
        <div className="progress-bar">
  
          <div
            className="progress"
            style={{ width: `${(averageIncome / 75000) * 100}%` }}
          >
                    <div className="progress-text">
              AIG: 75,000 | {Math.round((averageIncome / 75000) * 100) || 0}%
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}