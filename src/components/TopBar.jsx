import React from "react";

const TopBar = props => {
  const src = "https://www.3dmgame.com/uploads/allimg/140605/255_140605204804_1.jpg"
  const imgSrc = src.startsWith("http://") || src.startsWith('https://') 
    ? src
    : require("../assets/" + src) 
  return (
    <div className="ui segment">
      <div className="ui stackable grid">
        <div className="ui two wide column">
          <img
            style={{borderRadius: "50%"}}
            alt="profile_image"
            src= {imgSrc}
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
