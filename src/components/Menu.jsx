import React from "react";
import { connect } from "react-redux";
import { selectTab } from "../actions/inedx";

import MenuTab from "./MenuTab";
const Menu = props => {
  const tabs = props.tabs.map(tab => {
    return <MenuTab title={tab.title} key={tab.title} />;
  });
  return <div className="ui stackable four item menu">{tabs}</div>;
};

const mapStateToProps = state => {
  return {
    tabs: state.menuTabs
  };
};

export default connect(
  mapStateToProps,
  { selectTab: selectTab }
)(Menu);
