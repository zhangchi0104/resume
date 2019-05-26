import React from "react";

const LinkedCard = props => {
  return (
    <div className="ui card">
      <a className="image" style={{ padding: "2vh" }} href={props.link}>
        <img src={props.src} alt={props.alt} />
      </a>
      <div className="content">
        <a className="header" href={props.link}>
          {props.header}
        </a>
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

export default LinkedCard;
