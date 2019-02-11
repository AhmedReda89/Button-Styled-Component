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

const Icon = styled.i.attrs({ className: ({ name }) => `lnr lnr-${name}` })`
  width: 16px;
  height: 16px;
  background: transparent;
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
  ${props =>
    props.right
      ? css`
          font-size: 14px !important;
        `
      : null}
`;

const BaseButton = styled.button`
   {
    /* Layout */
  }
  display: inline-block;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: 3px;
  margin: 6px auto;
  text-align: center;
  padding: 0 10px;
  height: 40px;
  font-weight: 500;
  font-size: 12px;
  user-select: none;
  font-weight: bold;

   {
    /* Theme */
  }
  border: 1px solid #d1d1d1;
  background-color: #fff;
  > i {
    color: #ab1a2a;
    font-size: 17px;
  }
  color: #ab1a2a;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  ${props =>
    props.textOnly
      ? css`
          border: none;
          background: transparent;
          color: #ab1a2a;
          > i {
            color: #ab1a2a;
            font-size: 17px;
          }
        `
      : null}
  ${props =>
    props.primary
      ? css`
          border: none;
          color: #fff;
          background: #ab1a2a;
          > i {
            color: #fff;
            font-size: 17px;
          }
        `
      : null}

    > i {
    border-radius: 50%;
    position: relative;
    top: 2px;
  }
  ${props =>
    props.noLabel
      ? css`
          > i {
            margin: 0;
          }
        `
      : null}
`;

export default function Btn(props) {
  const { label, subLabel, icon, subIcon, children, ...passProps } = props;
  const _subLabel = subLabel ? <H7>{subLabel}</H7> : null;
  const _mainLabel = label ? (
    <H5>
      {label} {_subLabel}
    </H5>
  ) : (
    children
  );
  const _mainIcon = icon ? <Icon left name={icon} /> : null;
  const _subIcon = subIcon ? <Icon right name={subIcon} arrow /> : null;
  //console.log("BTN", { label, subLabel, icon, subIcon });
  return (
    <BaseButton {...passProps}>
      {_mainIcon}
      {_mainLabel}
      {_subIcon}
    </BaseButton>
  );
}
