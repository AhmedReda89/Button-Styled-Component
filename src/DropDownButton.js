import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Btn from "./Button";
import List from "./Menu";

import "./styles.css";

const BaseDDList = styled.div`
  padding: 10px;
  display: inline-block;
  position: relative;
  ul {
    position: absolute;
    left: 0;

    li {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

const DDList = styled(List)`
  position: absolute;
  border: 2px purple solid;
`;

export default class DropDownList extends React.Component {
  static Item = List.Item;

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.triggerRef = React.createRef();
    this.state = {
      disabled: props.disabled,
      menuItems: Array.isArray(props.menuItems) ? props.menuItems : [],
      isClosed: true
    };
  }

  // twoInOne() {
  //   const offHeight = this.listRef.current.offsetHeight;
  //   const offWidth = this.listRef.current.offsetWidth;
  //   const triggerViewportOffset = this.triggerRef.current.getBoundingClientRect();

  //   const renderDown =
  //     offHeight < window.innerHeight - triggerViewportOffset.top;
  //   const renderLTR = offWidth < window.innerWidth - triggerViewportOffset.left;

  //   const {
  //     offsetHeight: triggHeight,
  //     offsetWidth: triggWidth
  //   } = this.triggerRef.current;

  //   const { offsetHeight: listHeight } = this.listRef.current;

  //   this.listRef.current.style.minWidth = triggWidth + "px";

  //   if (renderDown) {
  //     this.listRef.current.style.top =
  //       triggHeight + triggerViewportOffset.top + "px";
  //   } else {
  //     this.listRef.current.style.top =
  //       triggerViewportOffset.top - listHeight + "px";
  //   }

  //   if (renderLTR) {
  //     this.listRef.current.style.left = triggerViewportOffset.left + "px";
  //   } else {
  //     this.listRef.current.style.left =
  //       triggerViewportOffset.left + triggWidth + "px";
  //   }
  // }

  getElementRenderDirections() {
    const offHeight = this.listRef.current.offsetHeight;
    const offWidth = this.listRef.current.offsetWidth;
    const triggerViewportOffset = this.triggerRef.current.getBoundingClientRect();

    const renderDown =
      offHeight < window.innerHeight - triggerViewportOffset.top;
    const renderLTR = offWidth < window.innerWidth - triggerViewportOffset.left;

    return {
      renderDown: renderDown,
      renderLTR: renderLTR
    };
  }

  updateListStylesWithDirections(obj) {
    const { renderDown, renderLTR } = obj;
    const triggerViewportOffset = this.triggerRef.current.getBoundingClientRect();
    const {
      offsetHeight: triggHeight,
      offsetWidth: triggWidth
    } = this.triggerRef.current;

    const { offsetHeight: listHeight } = this.listRef.current;

    this.listRef.current.style.minWidth = triggWidth + "px";

    if (renderDown) {
      this.listRef.current.style.top =
        triggHeight + triggerViewportOffset.top - window.scrollY + "px";
    } else {
      this.listRef.current.style.top =
        triggerViewportOffset.top - listHeight + window.scrollY + "px";
    }

    if (renderLTR) {
      this.listRef.current.style.left = triggerViewportOffset.left + "px";
    } else {
      this.listRef.current.style.left =
        triggerViewportOffset.left + triggWidth + "px";
    }
  }

  handleToggleMenu = () => {
    //debugger;
    this.setState(
      state => {
        return { isClosed: !state.isClosed };
      },
      () => {
        if (!this.state.isClosed) {
          this.listRef.current.style.opacity = "0";
          this.updateListStylesWithDirections(
            this.getElementRenderDirections()
          );
          this.listRef.current.style.opacity = "1";
        }
      }
    );
  };

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

  renderMenuTrigger() {
    return (
      <Btn
        ref={this.triggerRef}
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

  getMenuItemRenderPropsArgs(currentItem, currentItemIndex) {
    const { menuItems, isClosed } = this.state;

    return {
      currentItem,
      currentItemIndex,
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
    let items = menuItems.map((item, index) => {
      return (
        <List.Item key={index} className="defaultOuput" href={item.href}>
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

    return menuItems.map((item, index) => {
      return menuItemRender(this.getMenuItemRenderPropsArgs(item, index));
    });
  }

  renderMenuItemsRenderComponent() {
    const { menuItems } = this.state;

    const { menuItemComponent: MenuItemComponent } = this.props;

    if (!MenuItemComponent) {
      console.warn("menuItemRender not a valid react node");
      return null;
    }

    return menuItems.map((item, index) => {
      return (
        <MenuItemComponent
          className="componentOuput"
          key={index}
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
      <DDList
        ref={this.listRef}
        className="drop-down-list"
        closeMenu={this.state.isClosed}
      >
        {this.renderMenuItems()}
      </DDList>
    );
  }

  render() {
    let DDLsWrapper = document.getElementById("DDLsWrapper");
    return (
      <BaseDDList>
        {this.renderMenuTrigger()}
        {ReactDOM.createPortal(this.renderMenu(), DDLsWrapper)}
      </BaseDDList>
    );
  }
}
