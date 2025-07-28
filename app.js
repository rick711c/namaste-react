import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const elm1 = React.createElement("div", {}, [
  React.createElement("h1", { id: "h1tag", key: "hello1" }, "Hello world"),
  React.createElement("h1", { id: "h2tag", key: "hello2" }, "Hello world2"),
]);
const elm2 = (
  <div>
    <h1>Hello</h1>
    <p>Welcome to the React world.</p>
  </div>
);

function FuntionalComponent2(name, age) {
  return (
    <div>
      <h1>hello, this ia a valid funtional component</h1>
    </div>
  );
}

const el3 = React.createElement("h1", {}, "saikat");
console.log(el3);
const Fncomponent1 = (name, age) => {
  console.log(name, age);

  return (
    <div>
      this is a functional component 2 FuntionalComponent2("saikat2",12)
    </div>
  );
};
root.render(<Fncomponent1 name="saikat" age="22" />);
