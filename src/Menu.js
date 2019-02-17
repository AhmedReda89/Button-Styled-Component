import React from "react";
import styled, { css } from "styled-components";

import Btn from "./Button";

const BaseList = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin: 0;
  background: #f9f9f9;
  ${props =>
    props.closeMenu
      ? css`
          display: none;
        `
      : null}
`;

const BaseListItem = styled.li`
  &:hover {
    background-color: #ddd;
  }
  a {
    font-size: 18px;
    padding: 5px 0;
    display: inline-block;
    height: auto;
  }
`;

const List = React.forwardRef((props, ref) => {
  const { children, ...passProps } = props;

  const childs = React.Children.toArray(children);

  const listItems = childs.map((item, index) => {
    let lastItem = index === childs.length ? true : false;
    return !lastItem ? (
      <BaseListItem key={index}>
        {item}
        <List.Seprator />
      </BaseListItem>
    ) : (
      <BaseListItem key={index}>{item}</BaseListItem>
    );
  });

  return (
    <BaseList ref={ref} {...passProps}>
      {listItems}
    </BaseList>
  );
});

List.Item = props => {
  const passProps = { ...props };
  passProps.primary = false;

  return <Btn {...passProps} as="a" textOnly />;
};

List.Seprator = styled.hr`
  margin: 0;
  border: 0;
  border-top: 1px #ddd solid;
`;

export default List;
