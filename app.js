const heading = React.createElement("div", {id: "parent"}, [
  React.createElement("h1", {}, "yooooo you got this"),
  React.createElement("h2", {}, "yoo i can do this"),[
    React.createElement("p", {id:"para"}, "yo man!"),
  ]
])
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
