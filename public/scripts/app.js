'use strict';

var divStyle = {
  maxWidth: '926px',
  margin: '0 auto',
  textAlign: 'center',
  padding: '0',
  fontFamily: 'Helvetica, Arial, sans-serif'

};

var showDetails = {
  margin: '10px auto',
  textAlign: 'center',
  padding: '10px',
  maxWidth: '80%',
  fontFamily: 'Arial',
  backgroundColor: 'rgba(255,0,255,0.6)',
  opacity: '1',
  transition: '0.3s ease-out'
};

var visibility = true;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  renderVisibilityToggle();
};

var appRoot = document.querySelector("#app");

var renderVisibilityToggle = function renderVisibilityToggle() {
  var template = React.createElement(
    'div',
    { style: divStyle },
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      { style: showDetails },
      'Here are some details you can now see.'
    )
  );
  ReactDOM.render(template, appRoot);
};

renderVisibilityToggle();
