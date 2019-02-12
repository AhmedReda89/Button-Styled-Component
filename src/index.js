import React from "react";
import ReactDOM from "react-dom";
import Btn from "./Button";
import List from "./Menu";
import DropDownList from "./DropDownButton";

import "./styles.css";

export class TestComponent extends React.Component {
  render() {
    return (
      <a className="componentOutput" href={this.props.currentItem.href} primary>
        {this.props.currentItem.label}
      </a>
    );
  }
}

function renderItem({ currentItem }) {
  return (
    <a className="fnOutput" href={currentItem.href} primary>
      {currentItem.label}
    </a>
  );
}

function App() {
  const dummyData = [
    { label: "test 1", href: "#" },
    { label: "test 2", href: "#" },
    { label: "test 3", href: "#" },
    { label: "test 4", href: "#" }
  ];
  return (
    <div className="App">
      <h1>Button Styled Component</h1>
      <Btn primary icon="mustache">
        Primary Button
      </Btn>
      <br />
      <Btn primary subIcon="chevron-down">
        Primary Button
      </Btn>
      <br />
      <Btn primary icon="mustache" subIcon="chevron-down">
        Primary Button
      </Btn>
      <br />
      <Btn icon="mustache" subIcon="chevron-down">
        Default Button
      </Btn>
      <Btn icon="mustache" noLabel />
      <hr />
      <List>
        <List.Item subIcon>test 2</List.Item>
        <List.Item subIcon>test 2</List.Item>
        <List.Item label="Foo" icon>
          test 1
        </List.Item>
      </List>
      <hr />
      <DropDownList label="Default" menuItems={dummyData} />
      <DropDownList
        label="Render Function based"
        menuItems={dummyData}
        menuItemRender={renderItem}
      />
      <DropDownList
        label="Component based"
        btnIcon="mustach"
        btnSubIcon=""
        menuItems={dummyData}
        menuItemComponent={TestComponent}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
