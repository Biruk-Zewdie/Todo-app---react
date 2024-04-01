import React, { useState } from "react";
import "./NewTodoForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewTodoForm = ({addTodo, todoInput, setTodoInput, editId, setEditId, todos, setTodos}) => {
    
    const handleChange = (event) => {
        setTodoInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (editId){
            const updatedTodos = todos.map((todo) => {
                if (todo.id === editId){
                    return { ...todo, todo: todoInput };
                }else {
                    return todo;
                }
            })
            setTodos(updatedTodos)
            setEditId("")
            setTodoInput("")
        }else {
            addTodo(todoInput);
            setTodoInput("");
        } 
    }
    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add a Todo..."
                onChange={handleChange}
                value={todoInput} />
            <button type="submit">{editId? <FontAwesomeIcon icon={faEdit} /> : <FontAwesomeIcon icon={faPlus} /> }</button>
        </form>
    )

}

export default NewTodoForm;