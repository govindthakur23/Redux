import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {todos.length === 0 && (
                <div style={{ textAlign: 'center', fontSize: '3rem', color: "#b4f1ff", marginBottom: '1.5rem', marginTop: '2.5rem' }}>
                    Welcome ! Add Your Work Here
                </div>
            )}
            <ul className="list-none">
                {todos.map((todo) => (
                    <li className="mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded" key={todo.id}
                    >
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            <strong style={{ color: "red" }}> X</strong>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos;