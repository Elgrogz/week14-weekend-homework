import React from 'react';
import FaceContainer from './FaceContainer.jsx';
import ClueContainer from './ClueContainer.jsx';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);

    const Homer = {name: "Homer",
                  number: 1, 
                  clues: ["He's bald", "He has yellow skin", "He is a Powerplant Worker"],
                  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdNGEt0YKWwLWjD5IHlsAtyrpAiYblrmbuJp3yZNYCPY-NR2jyA"
                }

    const Bart = {name: "Bart", 
                  number: 2, 
                  clues: ["He's got yellow skin", "He's got yellow hair", "He's a Student"], 
                  photo: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
                }

    const Marge = {name: "Marge", 
                  number: 3, 
                  clues: ["She's got blue hair", "She's got yellow skin", "She's a Housewife"],
                  photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"
                }

    const Apu = {name: "Apu", 
                number: 4, 
                clues: ["He's got black hair", "He's got brown skin", "He runs the Kwikee Mart"],
                photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"
              }

    const characters = [Homer, Bart, Marge, Apu];

    this.state = {characters: characters, currentCharacter: characters[0]};
  }

  selectCharacter() {
    const randomNum = Math.floor(Math.random() * 4);
    this.setState(this.characters[randomNum]);
    console.log(randomNum);
  }

  // generateClues(character) {

  //   var clueList = [];
  //   for (var key in character.clues) {
  
  //       clueList.push(<p key={character.number}>{character.clues[key]}</p>);
  //   }
  //   console.log(clueList)
  //   return clueList;
  // }

  render() {

      return (
        <div className="main-container">
         <FaceContainer characters={this.state.characters}/>
         <ClueContainer clues={this.state.currentCharacter.clues}/> 
        </div>
      )
    }

}

module.exports = MainContainer;