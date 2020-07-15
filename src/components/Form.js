import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="searchBox">
        <form onSubmit={this.props.getWord}>
          <input type="text" name="word" placeholder="Введите слово" />
          <button>Поиск</button>
        </form>
      </div>
    );
  }
}

export default Form;
