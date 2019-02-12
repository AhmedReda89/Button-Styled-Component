import React from "react";
import styled from "styled-components";
import Btn from "./Button";
import List from "./Menu";

import "./styles.css";

const BaseDDList = styled.div`
  padding: 10px;
  background: #f9f9f9;
  display: inline-block;
`;
export default class DropDownList extends React.Component {
  static Item = List.Item;
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true
    };
  }

  render() {
    return (
      <BaseDDList>
        <Btn
          textOnly
          icon="mustache"
          subIcon="chevron-down"
          onClick={() =>
            this.setState(state => ({ isClosed: !state.isClosed }))
          }
        >
          Text Only Button
        </Btn>
        <List closeMenu={this.state.isClosed}>
          <List.Item primary>test properties</List.Item>
          {(() => {
            const incomingItems = this.props.menuItems;
            const menuRender = this.props.menuRender;
            const menuComponent = this.props.menuComponent;
            if (
              typeof incomingItems === "object" &&
              !menuRender &&
              !menuComponent
            ) {
              let items = incomingItems.map(item => {
                return (
                  <List.Item className="defaultOuput" href={item.href} primary>
                    {item.label}
                  </List.Item>
                );
              });
              return items;
            } else if (menuRender) {
              return menuRender(incomingItems);
            } else if (menuComponent) {
              const PassedComponent = menuComponent;
              let items = incomingItems.map(item => {
                return (
                  <PassedComponent
                    className="defaultOuput"
                    href={item.href}
                    label={item.label}
                    primary
                  />
                );
              });
              return items;
            }
          })()}
        </List>
      </BaseDDList>
    );
  }
}
