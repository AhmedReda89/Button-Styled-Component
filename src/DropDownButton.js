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
          List Button
        </Btn>
        <List closeMenu={this.state.isClosed}>
          <List.Item primary>test properties</List.Item>
          {this.props.menuItems.map((item, index) => {
            //console.log("Item: ", item);
            return (
              <List.Item key={index} primary>
                {item}
              </List.Item>
            );
          })}
        </List>
      </BaseDDList>
    );
  }
}
