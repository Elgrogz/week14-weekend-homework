import React from 'react';

class FaceComponent extends React.Component {

  constructor(props) {
    super(props); 
  }

  handleClickEvent() {
    this.props.click(this.props);
  }

  render() {
    return (
        <td className="face-component" onClick={this.handleClickEvent.bind(this)}><img src={this.props.details.photo}/></td>
      )
  }
}

module.exports = FaceComponent;