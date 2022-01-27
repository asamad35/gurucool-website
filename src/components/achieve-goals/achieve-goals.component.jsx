import React from "react";
import "./achieve-goals.styles.scss";

import achieveGoal1 from "../../assests/images/achieve-goal1.png";
import achieveGoal2 from "../../assests/images/achieve-goal2.png";
import achieveGoal3 from "../../assests/images/achieve-goal3.png";
import achieveGoal4 from "../../assests/images/achieve-goal4.png";

const AchieveGoals = () => {
  return (
    <div className="achieve-goals">
      <h1 className="achieve-goals-heading">
        Achieve your goals with <span> Gurucool </span>
      </h1>

      <div className="achieve-goals-box">
        <div className="achieve-goals-picture-box flex">
          <img src={achieveGoal1} alt="" />
          <h2 className="achieve-goals-picture-text">
            Learn the Latest skills
          </h2>
        </div>
        <div className="achieve-goals-picture-box flex">
          <img src={achieveGoal2} alt="" />
          <h2 className="achieve-goals-picture-text">Build a career</h2>
        </div>
        <div className="achieve-goals-picture-box flex">
          <img src={achieveGoal3} alt="" />
          <h2 className="achieve-goals-picture-text">Earn a Degree</h2>
        </div>
        <div className="achieve-goals-picture-box flex">
          <img src={achieveGoal4} alt="" />
          <h2 className="achieve-goals-picture-text">Add great value</h2>
        </div>
      </div>
    </div>
  );
};

export default AchieveGoals;
