import React from "react";

class Words extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const word = this.props.word;
    const definition = this.props.def.split('[').join('').split(']').join('');
    const id = this.props.id;   

    return (
      <div>
        <h1><h1>{id}</h1> {word}</h1>
        <p>{definition}</p>
      </div>
    );
  }
}

export default Words;
