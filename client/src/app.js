const React = require('react');
const ReactDOM = require('react-dom');
import MainContainer from './containers/MainContainer.jsx';


window.onload = function(){
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('app')
  );
}
