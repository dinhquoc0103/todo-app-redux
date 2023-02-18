import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { v4 as uuidV4 } from "uuid";

import styles from "./TodoList.module.scss";
import { addTodo } from "../../redux/actions";
import { todoListRemaining } from "../../redux/selectors";

import Todo from "../Todo";

const cx = classNames.bind(styles);

const prioritySelect = ["High", "Medium", "Low"];

function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState("Medium");

    const dispatch = useDispatch();
    const todoList = useSelector(todoListRemaining);

    const handleTodoNameChanged = (e) => {
        setTodoName(e.target.value);
    }

    const handlePirorityChanged = (e) => {
        setPriority(e.target.value);
    }

    const handleAddTodo = () => {
        if (todoName) {
            dispatch(addTodo({
                id: uuidV4(),
                name: todoName,
                completed: false,
                priority: priority
            }));
            setTodoName('');
            setPriority("Medium");
        }
        else {
            alert("Nothing to add");
        }
    }

    return (
        <div className={cx("todos")}>
            <div className={cx("todos__list")}>
                {
                    todoList.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            priority={todo.priority}
                            completed={todo.completed}
                        />
                    ))
                }
            </div>
            <div className={cx("todos__add")}>
                <input type="text" value={todoName} onChange={handleTodoNameChanged} />
                <select name="priority" onChange={handlePirorityChanged}>
                    {
                        prioritySelect.map(item => {
                            const selected = item === priority ? true : false;
                            return <option selected={selected} value={item} > {item}</option>;
                        })
                    }
                </select>
                <button onClick={handleAddTodo}>Add</button>
            </div>
        </div >
    );
}

export default TodoList;