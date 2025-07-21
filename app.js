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

function FuntionalComponent2() {
  return (
    <div>
      <h1>hello, this ia a valid funtional component</h1>
    </div>
  );
}
const Elm3 = FuntionalComponent2();
const Fncomponent1 = () => {
  return <div>this is q a functional component</div>;
};
root.render(FuntionalComponent2());
