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
          details={this.props.characters.characters[0]} 
          number={0}
          click={this.handlePhotoClickEvent.bind(this)}/>

          <FaceComponent 
          id="bart" 
          details={this.props.characters.characters[1]} 
          number={1} 
          click={this.handlePhotoClickEvent.bind(this)}/>

          <FaceComponent 
          id="marge" 
          details={this.props.characters.characters[2]} 
          number={2}
          click={this.handlePhotoClickEvent.bind(this)}/>

          <FaceComponent 
          id="apu" 
          details={this.props.characters.characters[3]} 
          number={3} 
          click={this.handlePhotoClickEvent.bind(this)}/>
        </tr>
      </tbody>
    </table>
    )
  }

}

module.exports = FaceContainer;


// <tr>
//   <FaceComponent 
//   id="homer" 
//   photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdNGEt0YKWwLWjD5IHlsAtyrpAiYblrmbuJp3yZNYCPY-NR2jyA"
//   number={0}
//   bald="true"
//   skinColour="yellow" 
//   click={this.handlePhotoClickEvent.bind(this)}/>

//   <FaceComponent 
//   id="bart" 
//   photo="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
//   number={1} 
//   bald="false"
//   hairColour="yellow"
//   skinColour="yellow" 
//   click={this.handlePhotoClickEvent.bind(this)}/>

//   <FaceComponent 
//   id="marge" 
//   photo="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"
//   number={2}
//   bald="false" 
//   hairColour="blue"
//   skinColour="yellow" 
//   click={this.handlePhotoClickEvent.bind(this)}/>

//   <FaceComponent 
//   id="apu" 
//   photo="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"
//   number={3} 
//   bald="false"
//   hairColour="black"
//   skinColour="brown" 
//   click={this.handlePhotoClickEvent.bind(this)}/>
// </tr>