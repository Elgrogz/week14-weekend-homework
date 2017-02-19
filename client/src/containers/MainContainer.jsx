import React from 'react';
import FaceContainer from './FaceContainer.jsx';
import ClueContainer from './ClueContainer.jsx';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);

    const Homer = {name: "Homer", bald:true, skinColour: "yellow", occupation: "Power plant Worker", gender: "male",
                  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdNGEt0YKWwLWjD5IHlsAtyrpAiYblrmbuJp3yZNYCPY-NR2jyA"}
    const Bart = {name: "Bart", bald:false, hairColour: "yellow", skinColour: "yellow", occupation: "Student/Prankster", gender: "male", 
                  photo: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"}
    const Marge = {name: "Marge", bald:false, hairColour: "blue", skinColour: "yellow", occupation: "Housewife", gender: "female",
                  photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"}
    const Apu = {name: "Apu", bald:false, hairColour: "black", skinColour: "brown", occupation: "Kwikee Mart owner", gender: "male",
                photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"}

    const characters = [Homer, Bart, Marge, Apu];

    this.state = {characters: characters, currentCharacter: characters[0], clues: null};
  }

  generateClues(character) {
    let pronoun;
    let hairColour;
    let skinColour;
    let occupation;

    for (var key in character) {
      if (character[gender] === "male") {
        pronoun = "He ";
      } else {
        pronoun = "She ";
      }

      if (character[bald] === true) {
        hairColour = " no ";
      }

      hairColour = character[hairColour];
      skinColour = character[skinColour];
      occupation = character[occupation];
    }

    return (
      <div id="clue-list">
      <p>{pronoun} has {skinColour} skin</p>
      <p>{pronoun} has {hairColour} hair</p>
      <p>{pronoun} is a {occupation}</p>
      </div>
      )
  }

  render() {

    const clueList = this.generateClues(this.state.currentCharacter);


      return (
        <div className="main-container">
         <FaceContainer characters={this.state.characters}/>
         <ClueContainer> 
            {clueList}
         </ClueContainer>
        </div>
      )
    }

}

module.exports = MainContainer;