import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"

// Load todos from local storage when component mounts
const getLocalStorage = () => {
    let todos = localStorage.getItem("todos")
    if (todos) {
        return (todos = JSON.parse(todos))
    } else {
        return [];
    }
}

const TodoList = () => {
    const [todos, setTodos] = useState(getLocalStorage())
    const [todoInput, setTodoInput] = useState("")
    const [editId, setEditId] = useState("")

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { todo: newTodo, id: uuidv4(),checked: false }])
    }

    const removeTodo = (index) => {
        setTodos(todos => todos.filter((todo, i) => index !== i))
    }

    const editTodo = (id) => {
        let newEditTodo = todos.find((todo) => todo.id === id)
        setTodoInput(newEditTodo.todo);
        setEditId(newEditTodo.id);
    }

    const toggleTodo = (id) => {
        setTodos(todos => todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }; // Toggle checked state
            }
            return todo;
        }));
    }

    // Update local storage whenever todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
        <div className="todoList-wrapper">
            <FontAwesomeIcon icon={faClipboardList} size="4x" />
            <h2 className="header">Todo App</h2>
            <NewTodoForm
                addTodo={addTodo}
                todoInput={todoInput}
                setTodoInput={setTodoInput}
                editId={editId}
                setEditId={setEditId}
                todos={todos}
                setTodos={setTodos}
            />
            <ul className="todo-lists">
                {todos.map(({ todo, id, checked}, index) => (<Todo
                    key={id}
                    todo={todo}
                    id={id}
                    checked= {checked}
                    index={index}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    toggleTodo={toggleTodo}
                />))}
            </ul>
        </div>
    )

}

export default TodoList;