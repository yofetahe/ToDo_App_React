import React, { createContext, useState, useReducer } from 'react';

import ApiCall from "../api/ApiCall";
// import { ToDosReducer } from '../reducers/ToDosReducer';

export const ToDosContext = createContext();

const ToDosContextProvider = (props) => {

    // const [toDoList, dispatch] = useReducer(ToDosReducer, []);
    const [toDoList, setToDoList] = useState([]);

    const fetchToDoList = async() => {
        const response = await ApiCall.get("/getAllToDoList");        
        setToDoList(response.data);
    }
    
    const handleToDosSubmit = async(e, title, description, props) => {
        e.preventDefault();        
        const response = await ApiCall.post("/addToDoList", {
            "title": title.value,
            "description": description.value
        });
        response.data ? props.history.push("/") : props.history.push("/addToDo");
    }

    return (
        <ToDosContext.Provider value={{ toDoList, fetchToDoList, handleToDosSubmit }}>
            {props.children}
        </ToDosContext.Provider>
    );
}

export default ToDosContextProvider;