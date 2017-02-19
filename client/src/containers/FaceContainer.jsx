import React from 'react';
import FaceComponent from '../components/FaceComponent.jsx'

class FaceContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClickEvent() {
    console.log('hello')
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
          click={this.handleClickEvent}/>

          <FaceComponent 
          id="bart" 
          photo="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
          number={1} 
          click={this.handleClickEvent}/>

          <FaceComponent 
          id="marge" 
          photo="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEKdjTjwv3OlkMbcSwr-eMgueoJqhhqE5WlE3dIyJBUKHJBwIe"
          number={2} 
          click={this.handleClickEvent}/>

          <FaceComponent 
          id="apu" 
          photo="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTemWdq1kmDSPAOfOmTzYS9L4Nd9v7HGcR2w8beDC2qWGBVBWsL"
          number={3} 
          click={this.handleClickEvent}/>
        </tr>
      </tbody>
    </table>
    )
  }

}

module.exports = FaceContainer;