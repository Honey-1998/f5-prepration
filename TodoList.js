// import React, { useEffect, useState } from 'react'

// function TodoList() {
//     const [input, setInput] = useState('');
//     const [todos, setTodos] = useState([]);

//     const [undoStack, setUndoStack] = useState([]);
//     // const [undoStack, setUndoStack] = useState([]);

//     // Add todo
//     const handleAddTodo = () => {
//         if(!input.trim()) return

//         setUndoStack([...undoStack, todos]);
//         setTodos([...todos, {
//             id: Date.now(),
//             title:input,
//             isCompleted: false
//         }])

//         setInput('');
//     }

//     // Toggle Complete
//     const toggleCompleted = (id) => {
//         setUndoStack([...undoStack, todos]);
//         setTodos(todos.map((todo) => {
//             if(todo.id !== id) return todo;
//             else return {...todo, isCompleted: !todo.isCompleted}
//         }))
//     }

//     // Delete completed
//     const handleDelete = () => {
//         setUndoStack([...undoStack, todos]);
//         setTodos(todos.filter(todo => !todo.isCompleted))
//     }
//     // Undo
//     const handleUndo = () => {
//         const tempTodo = undoStack.pop();
//         setUndoStack(undoStack);
//         setTodos(tempTodo)
//     }


//     return (
//         <div>
//             <h1>Todo App</h1>
//             <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
//             <button onClick={handleAddTodo}>Add Todo</button>
//             <h1>Todo List</h1>
//             <ul>
//                 {
//                     todos.map((todo) => (
//                         <li key={todo.id} className={todo.isCompleted&&'completed'}>
//                             <input type="checkbox" name="" id="" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)} />
//                             <span>{todo.title}</span>
//                         </li>
//                     ))
//                 }
//             </ul>
//             <button onClick={handleDelete}>Delete Completed</button>
//             <button onClick={handleUndo}>Undo</button>
//         </div>
//     )
// }

// export default TodoList

import React, { useEffect, useState } from 'react';

function TodoList() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    // Add todo
    const handleAddTodo = () => {
        if (!input.trim()) return;

        const newTodo = {
            id: Date.now(),
            title: input,
            isCompleted: false
        };

        setUndoStack([...undoStack, todos]);
        setTodos([...todos, newTodo]);
        setInput('');
        // Clear redo stack when adding a new todo
        setRedoStack([]);
    };

    // Toggle Complete
    const toggleCompleted = (id) => {
        setUndoStack([...undoStack, todos]);
        setTodos(
            todos.map((todo) =>
                todo.id !== id ? todo : { ...todo, isCompleted: !todo.isCompleted }
            )
        );
        // Clear redo stack when toggling complete
        setRedoStack([]);
    };

    // Delete completed
    const handleDelete = () => {
        setUndoStack([...undoStack, todos]);
        setTodos(todos.filter((todo) => !todo.isCompleted));
        // Clear redo stack when deleting completed todos
        setRedoStack([]);
    };

    // Undo
    const handleUndo = () => {
        if (undoStack.length === 0) return;

        const prevTodos = undoStack[undoStack.length - 1];
        const updatedUndoStack = [...undoStack.slice(0, -1)];
        setUndoStack(updatedUndoStack);
        setRedoStack([...redoStack, todos]);
        setTodos(prevTodos);
    };

    // Redo
    const handleRedo = () => {
        if (redoStack.length === 0) return;

        const nextTodos = redoStack[redoStack.length - 1];
        const updatedRedoStack = [...redoStack.slice(0, -1)];
        setRedoStack(updatedRedoStack);
        setUndoStack([...undoStack, todos]);
        setTodos(nextTodos);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.isCompleted && 'completed'}>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            checked={todo.isCompleted}
                            onChange={() => toggleCompleted(todo.id)}
                        />
                        <span>{todo.title}</span>
                    </li>
                ))}
            </ul>
            <button onClick={handleDelete}>Delete Completed</button>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleRedo}>Redo</button>
        </div>
    );
}

export default TodoList;
