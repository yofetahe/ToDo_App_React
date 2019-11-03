import React, { createContext, useState } from 'react';
import ApiCall from '../api/ApiCall';

export const TasksContext = createContext();

const TasksContextProvider =(props) => {

    const [toDo, setToDo] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [taskId, setTaskId] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskStatus, setTaskStatus] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [createAt, setCreateAt] = useState("");
    
    function restFormInput(){
        setTaskId("");
        setTaskTitle("");
        setTaskDescription("");
        setTaskStatus("");
        setDueDate("");
        setCreateAt("");
    }

    const handleInputChange = (type, value) => {
        switch (type) {
            case "TaskTitle":
                setTaskTitle(value);
                break;
            case "TaskDescription":
                setTaskDescription(value);
                break;
            case "TaskStatus":
                setTaskStatus(value);
                break;
            case "DueDate":
                setDueDate(value);
                break;
            case "CreateAt":
                setCreateAt(value);
                break;
            default:
                break;
        }
    }

    const toDoSetting = (toDo) => setToDo(toDo);
    const taskSetting = (task) => setTasks(task);

    const handleTaskSubmit = async(event, id, title, description, due_date, task_status, create_at, props) => {
        event.preventDefault();
              
        const response = await ApiCall.post("/addTask", 
        id ? {
            "id": id,
            "task_title": title,
            "task_description": description,
            "due_date": due_date,
            "task_status": task_status,
            "create_at": create_at,
            "toDoList": {
                "id": props.toDo.id,
                "title": props.toDo.title,
                "description": props.toDo.description,
                "create_at": props.toDo.create_at,
                "update_at": props.toDo.update_at,
                "task": []
            }
        } : {
            "task_title": title,
            "task_description": description,
            "due_date": due_date,
            "toDoList": {
                "id": props.toDo.id,
                "title": props.toDo.title,
                "description": props.toDo.description,
                "create_at": props.toDo.create_at,
                "update_at": props.toDo.update_at,
                "task": []
            }
        });
        
        setToDo(response.data);
        restFormInput();
        props.props.history.push(`/ToDoTasks/${props.toDo.id}`);
    }


    const handleUpdateTask = async (e, task_id, toDo_id) => {
        e.preventDefault();
        const response = await ApiCall.get(`/getTaskById/${task_id}`);
        setTaskId(response.data.id);
        setTaskTitle(response.data.task_title);
        setTaskDescription(response.data.task_description);
        setTaskStatus(response.data.task_status);
        setDueDate(response.data.due_date);
        setCreateAt(response.data.create_at);
    }

    const handleDeleteTask = async (e, task_id, toDo_id) => {
        e.preventDefault();
        const response = await ApiCall.delete(`/deleteTaskById/${toDo_id}/${task_id}`);
        setToDo(response.data)
    }

    return (
        <TasksContext.Provider value={{ 
            taskId, taskTitle, taskDescription, taskStatus, dueDate, createAt,
            handleInputChange, toDo, tasks, handleTaskSubmit, toDoSetting, taskSetting, handleUpdateTask, handleDeleteTask }}>
            {props.children}
        </TasksContext.Provider>
    );
}

export default TasksContextProvider;
