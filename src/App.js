import React from "react";

import Form from "./components/Form";
import Words from "./components/Words";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: undefined,
      definition: undefined,
      length: undefined,
    };

    this.getWord = this.getWord.bind(this);
  }

  getWord = async (event) => {
    event.preventDefault();

    const word = event.target.elements.word.value;

    const data = await fetch(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key":
            "c5fd39d330mshf65e717e280ee3fp1d397djsne76acb28113b",
        },
      }
    );

    const dataJSON = await data.json();

    this.setState({
      word: word,
      definition: dataJSON.list,
      length: dataJSON.list.length,
    });
  };

  render() {
    let listWords = null;

    if (this.state.length > 0) {
      //console.log(this.state.definition.map((item) => console.log(item)));

      let id = 0;
      listWords = this.state.definition.map((def) => (
        <Words key={id++} id={id} word={this.state.word} def={def.definition} />
      ));
    } else if (this.state.length == 0) {
      listWords = <div className="nowordBox">Такого слова нет :(</div>;
    } else if (listWords === null) {
      listWords = <div></div>;
    }

    return (
      <div className="wrapper">
        <Form getWord={this.getWord} />
        <div>{listWords}</div>
      </div>
    );
  }
}

export default App;
