import React from 'react';
import FaceContainer from './FaceContainer.jsx';
import ClueContainer from './ClueContainer.jsx';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="main-container">
         <FaceContainer />
         <ClueContainer />
        </div>
      )
    }

}

module.exports = MainContainer;