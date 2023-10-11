import React,{ useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoReducer } from "./TodoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los challenges",
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer,initialState);

    const agregarTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatch(action)
    }

    return (
        <>
            <h1>TodoApp: 10</h1>, <small>Pendientes: 2</small>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={agregarTodo}/>
                </div>
            </div>
        </>
    )
}