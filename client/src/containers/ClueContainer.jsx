import React from 'react';
// import Tile from './Tile.jsx';

class ClueContainer extends React.Component {

  constructor(props) {
    super(props);
  }

render() {

  const clues = this.props.clues.map(function(clue, index) {
    return <p id={index}>{clue}</p>
  })

    return (
      <div key="clue-container">
      {clues}
      </div>
    )
  }

}

module.exports = ClueContainer;