import React from "react";
import ReactDOM, { render } from "react-dom";
import styled from "styled-components";

import "./styles.css";

const DropDownList = styled.div`
  padding: 10px;
  background: #f9f9f9;

  display: inline-block;

  ul {
    list-style: none;
    padding: 0;

    li {
      button {
        color: grey;
      }
    }
  }
`;

export default class DDList extends React.Component {
  render() {
    return <DropDownList />;
  }
}
