import React from "react";

class Words extends React.Component {
  constructor(props) {
    super(props);

    this.firstToUpperCase = this.firstToUpperCase.bind(this);
  }

  firstToUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  render() {
    const word = this.props.word;
    const definition = this.firstToUpperCase(this.props.def.split('[').join('').split(']').join(''));
    const id = this.props.id;

    return (
      <div className="wordBox">
        <h1 className="word">{id}. {word}</h1>
        <p className="definition">{definition}</p>
      </div>
    );
  }
}

export default Words;
