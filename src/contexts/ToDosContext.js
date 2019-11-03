import React, { createContext, useState, useReducer, useEffect } from 'react';

import ApiCall from "../api/ApiCall";

export const ToDosContext = createContext();

const ToDosContextProvider = (props) => {

    const [toDoList, setToDoList] = useState([]);
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleInputChange = (type, value) => {
        type === "title" ? setTitle(value) : setDescription(value);
    }

    const fetchToDoList = async() => {
        restFormInput();
        const response = await ApiCall.get("/getAllToDoList");        
        setToDoList(response.data);
    }

    useEffect(() => {
        ApiCall.get("/getAllToDoList").then(r => setToDoList(r.data));
    }, []);
    
    const handleToDosSubmit = async(e, title, description, props) => {
        e.preventDefault();
        console.log(id, title, description);        
        const response = await ApiCall.post("/addToDoList", {
            "id": id,
            "title": title,
            "description": description
        });

        restFormInput();
        setToDoList(response.data);

        response.data ? props.history.push("/") : props.history.push("/addToDo");
    }

    function restFormInput(){
        setId("");
        setTitle("");
        setDescription("");
    }

    const handleUpdateToDo = async(e, id, props) => {
        e.preventDefault();
        const response = await ApiCall.get(`/getToDoById/${id}`);
        setId(response.data.id);
        setTitle(response.data.title);
        setDescription(response.data.description);
        response.data ? props.pHistory.history.push("/addToDo") : props.pHistory.history.push("/");
    }
    
    const handleToDoDeletion = async(e, id, props) => {        
        e.preventDefault();
        const response = await ApiCall.delete(`/deleteToDoById/${id}`);
        console.log(response);
        props.pHistory.history.push("/");
    }
    
    const handleNavigation = (id, props) =>{
        props.pHistory.history.push(`/ToDoTasks/${id}`);
    }

    return (
        <ToDosContext.Provider value={{ id, title, description, handleInputChange, toDoList, fetchToDoList, handleToDosSubmit, handleUpdateToDo, handleToDoDeletion, handleNavigation }}>
            { props.children }
        </ToDosContext.Provider>
    );
}

export default ToDosContextProvider;