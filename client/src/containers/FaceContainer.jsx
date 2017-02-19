import React from 'react';
import FaceComponent from '../components/FaceComponent.jsx'

class FaceContainer extends React.Component {

  constructor(props) {
    super(props);
    const characters = ["Homer", "Bart", "Marge", "Apu"];

    this.state = {characters: characters};
  }

  handleClickEvent(number) {
    console.log(this.state.characters[number]);
  }

render() {
    return (
      <table className= "Table">
      <tbody>
        <tr>
          <FaceComponent 
          id="homer"  
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdNGEt0YKWwLWjD5IHlsAtyrpAiYblrmbuJp3yZNYCPY-NR2jyA"
          number={0}
          bald="true"
          skinColour="yellow" 
          click={this.handleClickEvent.bind(this)}/>

          <FaceComponent 
          id="bart" 
          photo="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
          number={1} 
          bald="false"
          hairColour="yellow"
          skinColour="yellow" 
          click={this.handleClickEvent.bind(this)}/>

          <FaceComponent 
          id="marge" 
          photo="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"
          number={2}
          bald="false" 
          hairColour="blue"
          skinColour="yellow" 
          click={this.handleClickEvent.bind(this)}/>

          <FaceComponent 
          id="apu" 
          photo="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"
          number={3} 
          bald="false"
          hairColour="black"
          skinColour="brown" 
          click={this.handleClickEvent.bind(this)}/>
        </tr>
      </tbody>
    </table>
    )
  }

}

module.exports = FaceContainer;