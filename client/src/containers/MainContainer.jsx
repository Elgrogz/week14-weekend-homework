import React from 'react';
import FaceContainer from './FaceContainer.jsx';
import ClueContainer from './ClueContainer.jsx';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);

    const Homer = {name: "Homer", bald:true, skinColour: "Yellow", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdNGEt0YKWwLWjD5IHlsAtyrpAiYblrmbuJp3yZNYCPY-NR2jyA"}
    const Bart = {name: "Bart", bald:false, hairColour: "Yellow", skinColour: "Yellow", photo: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"}
    const Marge = {name: "Marge", bald:false, hairColour: "Blue", skinColour: "Yellow", photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"}
    const Apu = {name: "Apu", bald:false, hairColour: "Black", skinColour: "Brown", photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"}

    const characters = [Homer, Bart, Marge, Apu];

    this.state = {characters: characters, currentCharacter: characters[0]};
  }

  render() {
      return (
        <div className="main-container">
         <FaceContainer characters={this.state}/>
         <ClueContainer />
        </div>
      )
    }

}

module.exports = MainContainer;