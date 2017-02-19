import React from 'react';
import FaceComponent from '../components/FaceComponent.jsx'

class FaceContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  selectCharacter() {
    const randomNum = Math.floor(Math.random() * 4);
    this.state.currentCharacter = this.character[randomNum];
    console.log(randomNum)
  }

  handlePhotoClickEvent(props) {
    console.log(props);
    // this.selectCharacter;
    // console.log(this.state.currentCharacter);
  }

render() {
    return (
      <table className= "Table">
      <tbody>
        <tr>
          <FaceComponent 
          id="homer"
          details={this.props.characters[0]} 
          number={0}
          click={this.handlePhotoClickEvent.bind(this)}/>

          <FaceComponent 
          id="bart" 
          details={this.props.characters[1]} 
          number={1} 
          click={this.handlePhotoClickEvent.bind(this)}/>

          <FaceComponent 
          id="marge" 
          details={this.props.characters[2]} 
          number={2}
          click={this.handlePhotoClickEvent.bind(this)}/>

          <FaceComponent 
          id="apu" 
          details={this.props.characters[3]} 
          number={3} 
          click={this.handlePhotoClickEvent.bind(this)}/>
        </tr>
      </tbody>
    </table>
    )
  }

}

module.exports = FaceContainer;

