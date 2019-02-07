import React from "react";
import styled, { css } from "styled-components";

import { Btn } from "./Button";

const BaseMenu = styled.ul`
  list-style: none;
  padding: 0;
  background: grey;
`;

const BaseMenuItem = styled.li``;

export default function Menu(props) {
  const { children, ...passProps } = props;

  const childs = React.Children.toArray(children);

  const menuItems = childs.map((item, index) => {
    return <BaseMenuItem key={index}>{item}</BaseMenuItem>;
  });

  return <BaseMenu {...passProps}>{menuItems}</BaseMenu>;
}

Menu.Item = styled(Btn).attrs({
  as: "a",
  primary: false,
  wired: true
})``;

Menu.Seprator = styled.hr``;
