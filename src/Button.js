import styled, { css } from "styled-components";

import "./styles.css";

export const Button = styled.button`
   {
    /* Layout */
  }
  display: inline-block;
  position: relative;
  white-space: nowrap;
  margin-bottom: 0;
  text-align: center;
  padding: 5px 10px;
  height: 40px;
  font-weight: 400;
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
  border-radius: 10%;
  text-decoration: none;
  ${props =>
    props.wired
      ? css`
          border: 1px #ddd solid;
          background-color: transparent;
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
  ${props =>
    props.textOnly
      ? css`
          border: none;
          background: transparent;
          color: tomato;
        `
      : null}
`;
