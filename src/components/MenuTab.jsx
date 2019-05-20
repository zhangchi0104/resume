import React from "react";
import { connect } from "react-redux";

import { selectTab, selectCards } from "../actions/inedx";

const MenuTab = props => {
  const tabTitle = props.title;
  const activeTabTitle = props.activeTab.title;
  const tabStyle = activeTabTitle === tabTitle ? "active item" : "item";

  return (
    <div
      className={tabStyle}
      onClick={() => {
        props.selectTab(tabTitle);
        props.selectCards(tabTitle);
      }}
    >
      {tabTitle}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  };
};

export default connect(
  mapStateToProps,
  {
    selectTab: selectTab,
    selectCards: selectCards
  }
)(MenuTab);
