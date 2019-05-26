import React from "react";

const Card = props => {
  return (
    <div className="ui card">
      <div className="image" style={{ padding: "2vh" }}>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="content">
        <div className="header">{props.header}</div>
        <div className="meta">{props.meta}</div>
      </div>
      <div className="extra content">
        <div className="right floated">
          <span className="description">
            <b>{props.rightContent}</b>
          </span>
        </div>
        <div className="left floated">
          <span>
            <b>{props.leftContent}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
