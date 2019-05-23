import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Cards = props => {
  const cardsStyle = window.innerWidth < 650 ? { margin: "0px" } : {};
  const extraStyle = props.activeCards.extraStyle ? props.activeCards.extraStyle : "";
  return (
    <div className={`ui ${extraStyle} centered  stackable cards`} style={cardsStyle}>
      {renderCards(props.activeCards.cards, props.activeCards.containsLinks)}
    </div>
  );
};

const renderCards = (cards,isContainsLinks) => {
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
        isContainsLinks={isContainsLinks}
        link={card.link}
      />
    );
  });
  return renderedCards;
};

const mapStateToProps = state => {
  return { activeCards: state.activeCards };
};

export default connect(mapStateToProps)(Cards);
