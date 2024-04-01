import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Todo.css"

const Todo = ({ todo, removeTodo, index, editTodo, id }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        // Load strike-through state from local storage when component mounts
        const storedIsChecked = localStorage.getItem(`isChecked-${id}`);
        if (storedIsChecked) {
            setIsChecked(JSON.parse(storedIsChecked));
        }
    }, [id]);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        // Update strike-through state in local storage
        localStorage.setItem(`isChecked-${id}`, JSON.stringify(newCheckedState));
    }

    return (
        <div className="todo">
            <li className={`todo-list ${isChecked ? "checked" : ""}`}>
                <input type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {todo}

                <button
                    className="edit-btn"
                    onClick={() => editTodo(id)}
                >
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                </button>
                <button
                    className="remove-btn"
                    onClick={() => removeTodo(index)}
                >
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>

            </li>
        </div>
    )
}

export default Todo;