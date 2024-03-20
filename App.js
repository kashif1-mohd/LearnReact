const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React.js"
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
