import React from 'react';

class Form extends React.Component {
  render() {
     return (
       <form onSubmit={this.props.getWord}>
         <input type="text" name="word" placeholder="Слово" />
         <button>Поиск слова</button>
       </form>
     )
  }
}

export default Form;