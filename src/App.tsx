import React from 'react';
import ToDoList from './ToDoList';
// import InputToDo from './InputToDo';

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

  onSubmit(e: any) {
    const inputText: string = e.target.childNodes[0].value;
    const getToDos: toDoItems[] = JSON.parse(localStorage.getItem('items') || '[]');
    const lenToDos: number = getToDos.length
    let newID: number = 0;
    lenToDos > 0
      ? newID = getToDos[lenToDos - 1].id + 1
      : newID = 0

    const newToDo: toDoItems = { id: newID, toDo: inputText }
    const newToDos = Array.from(getToDos)
    newToDos.push(newToDo)

    this.setState({ toDos: newToDos })
    localStorage.setItem('items', JSON.stringify(newToDos))

    e.target.childNodes[0].value = '';
  }

  render() {
    const toDos: toDoItems[] = this.state.toDos;
    return (
      <div className="App">
        <form
          className="inputToDo"
          autoComplete="none"
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmit(e)
          }}
        >
          <input type="text" name="writeToDo" className="inputToDo__input" />
          <input type="submit" name="submitToDo" className="inputToDo__submit" />
        </form >
        {/* <InputToDo
          onSubmit={(newToDos: toDoItems[]) => {
            this.setState({ toDos: newToDos })
          }}
        /> */}
        <article>
          {toDos.map(todo => (
            <ToDoList
              id={todo.id}
              toDo={todo.toDo}
            />
          ))}
        </article>
      </div >
    );
  }
}

export default App;
