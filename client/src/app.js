const React = require('react');
const ReactDOM = require('react-dom');
const MainContainer = require('./containers/MainContainer.jsx');


window.onload = function(){
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('app')
  );
}
