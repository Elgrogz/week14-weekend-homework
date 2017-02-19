import React from 'react';
import FaceContainer from './FaceContainer.jsx';
import ClueContainer from './ClueContainer.jsx';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);

    const Homer = {name: "Homer",
                  number: 1, 
                  clues: {ClueOne:"He's bald", ClueTwo: "He has yellow skin", ClueThree: "He is a Powerplant Worker"},
                  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdNGEt0YKWwLWjD5IHlsAtyrpAiYblrmbuJp3yZNYCPY-NR2jyA"
                }

    const Bart = {name: "Bart", 
                  number: 2, 
                  clues: {ClueOne: "He's got yellow skin", ClueTwo: "He's got yellow hair", ClueThree: "He's a Student/Prankster"}, 
                  photo: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                }

    const Marge = {name: "Marge", 
                  number: 3, 
                  clues: {ClueOne: "She's got blue hair", ClueTwo: "She's got yellow skin", ClueThree: "She's a Housewife"},
                  photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"
                }

    const Apu = {name: "Apu", 
                number: 4, 
                clues: {ClueOne: "He's got black hair", ClueTwo: "He's got brown skin", ClueThree: "He runs the Kwikee Mart"},
                photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"
              }

    const characters = [Homer, Bart, Marge, Apu];

    this.state = {characters: characters, currentCharacter: characters[0], clues: null};
  }

  selectCharacter() {
    const randomNum = Math.floor(Math.random() * 4);
    this.setState(this.characters[randomNum]);
    console.log(randomNum);
  }

  generateClues(character) {

    var clueList = [];
    for (var key in character.clues) {
  
        clueList.push(<p key={character.number}>{character.clues[key]}</p>);
    }
    console.log(clueList)
    return clueList;
  }

  render() {

    const clueList = this.generateClues(this.state.currentCharacter);

      return (
        <div className="main-container">
         <FaceContainer characters={this.state.characters}/>
         <ClueContainer> 
            {clueList.props}
         </ClueContainer>
        </div>
      )
    }

}

module.exports = MainContainer;