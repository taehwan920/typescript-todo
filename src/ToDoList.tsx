import React from 'react';

function ToDoList({ id, toDo }: { id: number, toDo: string }) {

    return (
        <div>
            <h1>{toDo}</h1>
            <span className="deleteBtn" role="img" aria-label="delete">❌</span>
        </div>
    )
}

export default ToDoList;