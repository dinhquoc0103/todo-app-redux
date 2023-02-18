// ======== todoList ========

export const addTodo = todo => {
    return {
        type: "todoList/addTodo",
        payload: todo
    }
}

export const deleleTodo = id => {
    return {
        type: "todoList/deleleTodo",
        payload: id
    }
}

export const completedChanged = id => {
    return {
        type: "todoList/completedChanged",
        payload: id
    }
}

export const searchValueChanged = value => {
    return {
        type: "filters/searchValueChanged",
        payload: value
    }
}

export const statusChanged = name => {
    return {
        type: "filters/statusChanged",
        payload: name
    }
}

export const priorityChanged = value => {
    return {
        type: "filters/priorityChanged",
        payload: value
    }
}