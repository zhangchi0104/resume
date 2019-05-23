import React from "react";
const renderLinks = (isContainsLinks, content, link) => {
  const htmlTags = isContainsLinks ? (
    <a className="header" href={link}>{content}</a>
  ) : (
    <div className="header">{content}</div>
  ); 
  return htmlTags; 
}
const Card = props => {
  return (
    <div className="ui card">
      <div className="image" style = {{padding: "2vh" }}>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="content">
        {renderLinks(props.isContainsLinks, props.header, props.link)}
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
