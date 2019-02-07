import React from "react";
import styled, { css } from "styled-components";

const H5 = styled.h5`
  padding: 0;
  margin: 0;
  font-size: 14px;
  display: inline-block;
`;

const H7 = styled.h6`
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Icon = styled.i`
  width: 20px;
  height: 20px;
  background: tomato;
  display: inline-block;
  ${props =>
    props.left
      ? css`
          margin-right: 10px;
        `
      : null}
  ${props =>
    props.right
      ? css`
          margin-left: 10px;
        `
      : null}
`;

const BaseButton = styled.button`
   {
    /* Layout */
  }
  display: inline-block;
  position: relative;
  white-space: nowrap;
  margin: auto 10px;
  text-align: center;
  padding: 5px 10px;
  height: 40px;
  font-weight: 500;
  font-size: 12px;
  user-select: none;
  font-weight: bold;

   {
    /* Theme */
  }
  border: none;
  background-color: #d1d1d1;
  color: #000;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  ${props =>
    props.wired
      ? css`
          border: 1px #ddd solid;
          background-color: transparent;
        `
      : null}
  ${props =>
    props.textOnly
      ? css`
          border: none;
          background: transparent;
          color: tomato;
        `
      : null}
  ${props =>
    props.primary
      ? css`
          border: none;
          background: papayawhip;
          color: tomato;
        `
      : null}

    > i {
      border-radius: 10px;
      background-color:green;
    }
  
`;

export function Btn(props) {
  const { label, subLabel, icon, subIcon, children, ...passProps } = props;
  const _subLabel = subLabel ? <H7>{subLabel}</H7> : null;
  const _mainLabel = label ? (
    <H5>
      {label} {_subLabel}
    </H5>
  ) : (
    children
  );
  const _mainIcon = icon ? <Icon left /> : null;
  const _subIcon = subIcon ? <Icon righ /> : null;
  console.log("BTN", { label, subLabel, icon, subIcon });
  return (
    <BaseButton {...passProps}>
      {_mainIcon}
      {_mainLabel}
      {_subIcon}
    </BaseButton>
  );
}
