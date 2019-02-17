import React from "react";
import ReactDOM from "react-dom";
import Btn from "./Button";
import List from "./Menu";
import DropDownList from "./DropDownButton";

import "./styles.css";

export class TestComponent extends React.Component {
  render() {
    return (
      <a className="componentOutput" href={this.props.currentItem.href}>
        {this.props.currentItem.label}
      </a>
    );
  }
}

function renderItem({ currentItem, currentItemIndex }) {
  return (
    <a className="fnOutput" key={currentItemIndex} href={currentItem.href}>
      {currentItem.label}
    </a>
  );
}

function App() {
  const dummyData = [
    { label: "test 1", href: "#" },
    { label: "test 2 a little longer", href: "#" },
    { label: "test 3", href: "#" },
    { label: "test 4 is much more longer than other items", href: "#" }
  ];
  return (
    <div className="App">
      <h1>Buttons and DDL Components</h1>
      <p className="muted-text">Styled components</p>
      <DropDownList label="Default" menuItems={dummyData} />
      <DropDownList
        label="Render Function based"
        menuItems={dummyData}
        menuItemRender={renderItem}
      />
      <DropDownList
        label="Component based"
        btnIcon="mustach"
        menuItems={dummyData}
        menuItemComponent={TestComponent}
      />
      <br />
      <Btn primary icon="mustache">
        Primary Button
      </Btn>
      <Btn>Default Button</Btn>
      <br />
      <Btn primary icon="mustache" subIcon="chevron-down">
        Primary Button
      </Btn>
      <br />
      <Btn icon="mustache" subIcon="chevron-down">
        Default Button
      </Btn>
      <Btn icon="mustache" noLabel />
      <br />
      <Btn textOnly>Text Only</Btn>
      <hr />
      <List>
        <List.Item>test 2</List.Item>
        <List.Item>test 2</List.Item>
        <List.Item label="Foo">test 1</List.Item>
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
        menuItems={dummyData}
        menuItemComponent={TestComponent}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
