import React from "react";
import styled from "styled-components";
import Btn from "./Button";
import List from "./Menu";

import "./styles.css";

const BaseDDList = styled.div`
  padding: 10px;
  display: inline-block;
  li {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default class DropDownList extends React.Component {
  static Item = List.Item;

  constructor(props) {
    super(props);

    this.state = {
      disabled: props.disabled,
      menuItems: Array.isArray(props.menuItems) ? props.menuItems : [],
      isClosed: true
    };
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState((prvState, props) => {
      return {
        disabled: props.disabled,
        menuItems: Array.isArray(props.menuItems)
          ? props.menuItems
          : prvState.menuItems
      };
    });
  }

  handleToggleMenu = () => {
    this.setState(state => ({ isClosed: !state.isClosed }));
  };

  renderMenuTrigger() {
    return (
      <Btn
        textOnly
        icon="mustache"
        subIcon="chevron-down"
        onClick={this.handleToggleMenu}
      >
        {this.props.label}
      </Btn>
    );
  }

  renderMenuTriggerDisable() {
    return (
      <Btn textOnly disabled icon="mustache" subIcon="chevron-down">
        {this.props.label}
      </Btn>
    );
  }

  getMenuItemRenderPropsArgs(currentItem) {
    const { menuItems, isClosed } = this.state;

    return {
      currentItem,
      menuItems,
      isClosed
    };
  }

  getMenuItemRenderComponentProps(currentItem) {
    const { menuItems, isClosed } = this.state;

    return {
      currentItem,
      menuItems,
      isClosed
    };
  }

  renderMenuItems() {
    const { menuItemRender, menuItemComponent } = this.props;

    if (menuItemComponent) {
      return this.renderMenuItemsRenderComponent();
    } else if (menuItemRender) {
      return this.renderMenuItemsRenderProps();
    }

    const { menuItems } = this.state;
    let items = menuItems.map(item => {
      return (
        <List.Item className="defaultOuput" href={item.href}>
          {item.label}
        </List.Item>
      );
    });

    return items;
  }

  renderMenuItemsRenderProps() {
    const { menuItems } = this.state;

    const { menuItemRender } = this.props;

    if (typeof menuItemRender !== "function") {
      console.warn("menuItemRender not a function");
      return null;
    }

    return menuItems.map(item => {
      return menuItemRender(this.getMenuItemRenderPropsArgs(item));
    });
  }

  renderMenuItemsRenderComponent() {
    const { menuItems } = this.state;

    const { menuItemComponent: MenuItemComponent } = this.props;

    if (!MenuItemComponent) {
      console.warn("menuItemRender not a valid react node");
      return null;
    }

    return menuItems.map(item => {
      return (
        <MenuItemComponent
          className="componentOuput"
          href={item.href}
          label={item.label}
          {...this.getMenuItemRenderComponentProps(item)}
        />
      );
    });
  }

  renderMenu() {
    const { disabled } = this.state;

    if (disabled) {
      return null;
    }

    return (
      <List closeMenu={this.state.isClosed}>
        <List.Item primary>test properties</List.Item>
        {this.renderMenuItems()}
      </List>
    );
  }

  render() {
    return (
      <BaseDDList>
        {this.renderMenuTrigger()}
        {this.renderMenu()}
      </BaseDDList>
    );
  }
}
