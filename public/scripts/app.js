"use strict";

console.log("TEST");

// Styles Import
// import {optionsStyle, headerStyle, formStyle} from './styles';
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the computer's hands.",
  options: ['React Guru', 'Redux Master', 'Sass Virtuoso']
};

var returnOptions = function returnOptions(options) {
  if (options) {
    return React.createElement(
      "ol",
      null,
      options.map(function (i, index) {
        return React.createElement(
          "li",
          { style: optionsInputStyle, key: index },
          i
        );
      })
    );
  } else {
    return "No options available";
  }
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  var wipeout = e.target.elements.wipeout;

  if (option) {
    app.options.push(option);
    renderIndecisionApp();
    e.target.elements.option.value = '';
  } else if (wipeout) {
    app.options = [];
    renderIndecisionApp();
  }
};

var optionsStyle = {
  fontSize: '1.2rem',
  fontFamily: 'Arial',
  textAlign: 'center',
  fontWeight: '600',
  listStyleType: 'none'
};
var optionsInputStyle = {
  fontSize: '1.2rem',
  fontFamily: 'Arial',
  textAlign: 'left',
  fontWeight: '600'
};
var headerStyle = {
  fontSize: '2rem',
  fontFamily: 'Arial',
  textAlign: 'center',
  fontWeight: '800'
};
var formStyle = {
  fontSize: '1rem',
  padding: '0',
  margin: '0 auto',
  fontFamily: 'Arial',
  textAlign: 'center',
  fontWeight: '600'
};
var buttonStyle = { border: 'none', display: 'block', background: 'red', textAlign: 'center', color: 'white', borderRadius: '15px', margin: '5px auto' };
var appRoot = document.querySelector("#app");

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};
var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    "div",
    null,
    app.title && React.createElement(
      "h1",
      { style: headerStyle },
      app.title
    ),
    React.createElement(
      "p",
      { style: optionsStyle },
      React.createElement(
        "strong",
        null,
        app.subtitle ? app.subtitle : 'No subtitle'
      )
    ),
    React.createElement(
      "p",
      { style: optionsStyle },
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      "p",
      {
        style: optionsStyle },
      app.options.length > 0 ? "Options count " + app.options.length : null
    ),
    returnOptions(app.options),
    React.createElement(
      "button",
      { type: "button", disabled: app.options.length === 0, style: buttonStyle, onClick: onMakeDecision },
      "Make Decision"
    ),
    React.createElement(
      "form",
      { style: formStyle, onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        { type: "submit" },
        "Add Options"
      ),
      React.createElement(
        "button",
        { name: "wipeout", style: buttonStyle, type: "submit" },
        "Wipe Out"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
