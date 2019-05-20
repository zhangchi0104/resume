import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Cards = props => {
  const cardsStyle = window.innerWidth < 650 ? { margin: "0px" } : {};
  return (
    <div className="ui centered stackable cards" style={cardsStyle}>
      {renderCards(props.activeCards)}
    </div>
  );
};

const renderCards = cards => {
  const renderedCards = cards.map(card => {
    return (
      <Card
        src={card.src}
        header={card.header}
        leftContent={card.leftContent}
        rightContent={card.rightContent}
        alt={card.alt}
        meta={card.meta}
        key={card.alt}
      />
    );
  });
  return renderedCards;
};

const mapStateToProps = state => {
  return { activeCards: state.activeCards };
};

export default connect(mapStateToProps)(Cards);
