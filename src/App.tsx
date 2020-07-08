import React from 'react';
import ToDoList from './ToDoList';
import InputToDo from './InputToDo';

interface toDoItems {
  id: number;
  toDo: string;
}

class App extends React.Component {
  state = {
    toDos: []
  }

  componentDidMount = () => {
    const JSONToDos: toDoItems[] = JSON.parse(localStorage.getItem('items') || '[]');
    JSONToDos.length > 0
      ? this.setState({ toDos: JSONToDos })
      : console.log('No data exists');

  }

  render() {
    const toDos = this.state.toDos;
    return (
      <div className="App">
        <InputToDo
        // toDos={toDos}
        // onSubmit={(newToDos: toDoItems[]) => {
        //   this.setState({ toDos: newToDos })
        // }.bind(this)}
        />
        <ToDoList />
      </div>
    );
  }
}

export default App;
