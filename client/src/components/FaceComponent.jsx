import React from 'react';

class FaceComponent extends React.Component {

  constructor(props) {
    super(props); 
  }

  handleClickEvent() {
    this.props.click(this.props.number);
  }

  render() {
    return (
        <td className="face-component" onClick={this.handleClickEvent.bind(this)}><img src={this.props.photo}/></td>
      )
  }
}

module.exports = FaceComponent;