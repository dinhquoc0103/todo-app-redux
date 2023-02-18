import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    filters: {
        searchValue: '',
        status: 'All',
        priority: 'default'
    },
    todoList: JSON.parse(localStorage.getItem("TODOLIST_STATE"))
}
const composeEnhancer = composeWithDevTools();

const store = createStore(rootReducer, initialState, composeEnhancer);

export default store;