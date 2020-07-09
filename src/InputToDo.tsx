import React from 'react';

interface propFunc {

}

class InputToDo extends React.Component {
    onSubmit(e: any) {
        console.log(e.target);
    }
    render() {
        return (
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
        )
    }
};

export default InputToDo;