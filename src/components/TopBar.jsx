import React from "react";

const TopBar = props => {
  return (
    <div className="ui segment">
      <div className="ui stackable grid">
        <div className="ui two wide column">
          <img
            alt="profile_image"
            src="https://rawcdn.githack.com/amknight/profile-page-workshop/b7841738c730939ac9937b1d31b6acb0dcdb70dc/src/assets/profile4.png"
            className="ui tiny image"
          />
        </div>
        <div className="ui four wide column" style={{ paddingLeft: "0" }}>
          <h1 className="ui large header" style={{ margin: " 10px 0 5px 0px" }}>
            {props.name}
          </h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
