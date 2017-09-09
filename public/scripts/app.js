"use strict";

console.log("TEST");
var app = {
  title: "JSX Expressions",
  subtitle: "React's way of typing HTML and XML",
  options: ['ReactJS', 'SASS', 'HTML', "APIs", "NODEJS", "REDUX", "REACT NATIVE"]
};

function returnOptions(options) {
  // return options.map((item, index)=>{
  //   return <ol key ={index}><li>{item}</li></ol>
  // })
  if (options) {
    return React.createElement(
      "ol",
      null,
      options.map(function (i, index) {
        return React.createElement(
          "li",
          { key: index },
          i
        );
      })
    );
  } else {
    return "No options available";
  }
}
var template = React.createElement(
  "div",
  null,
  app.title && React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle ? app.subtitle : 'No subtitle'
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "strong",
      null,
      "Expertise"
    )
  ),
  returnOptions(app.options)
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  if (count >= 1) {
    count--;
    renderCounterApp();
    console.log('minusOne');
  }

  return false;
};

var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
  console.log('Reset button clicked!');
};

var appRoot = document.querySelector("#app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: resetCount },
      "Reset"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
