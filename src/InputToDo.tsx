import React from 'react';

class InputToDo extends React.Component {
    render() {
        return (
            <form className="inputToDo">
                <input type="text" name="writeToDo" className="inputToDo__input" />
                <input type="submit" name="submitToDo" className="inputToDo__submit" />
            </form>
        )
    }
};

export default InputToDo;