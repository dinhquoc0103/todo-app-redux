const initialState = [
    // { id: 1, name: "Listening to music", completed: false, priority: "Medium" },
    // { id: 2, name: "Listening to music", completed: false, priority: "Medium" },
]

const todoListReducer = (state = initialState, action) => {
    const todoList = state;

    switch (action.type) {
        case "todoList/addTodo":
            return [
                action.payload,
                ...state
            ]

        case "todoList/deleleTodo":
            const newTodoList = todoList.filter(todo => todo.id !== action.payload);
            return newTodoList;

        case "todoList/completedChanged":
            const currentTodo = todoList.find(todo => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
            return state;

        default:
            return state;
    }
}

export default todoListReducer;