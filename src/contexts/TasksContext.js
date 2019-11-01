import React, {createContext, useState} from 'react';
import ApiCall from '../api/ApiCall';

export const TasksContext = createContext();

const TasksContextProvider =(props) => {

    const [toDo, setToDo] = useState([]);
    const [tasks, setTasks] = useState([]);

    const fetchTaskList = async(id) => {
        console.log("fetch task list called >>>>> " + id)
        const response = await ApiCall.get(`/getTaskListByToDoListId/${id}`);
        setToDo(response.data)
        setTasks(response.data.task);
    };

    const handleTaskSubmit = async(event, title, description, due_date, props) => {
        console.log(">>>>>>>>>>>>>> ", title, description, due_date, props.toDo);        
        event.preventDefault();        
        const response = await ApiCall.post("/addTask", {
            "task_title": title.value,
            "task_description": description.value,
            "due_date": due_date.value,
            "toDoList": props.toDo
        });
        console.log(response.data);
        // console.log(props);
        props.props.history.push(`/ToDoTasks/${props.toDo.id}`);
    }

    return (
        <TasksContext.Provider value={{toDo, tasks, fetchTaskList, handleTaskSubmit}}>
            {props.children}
        </TasksContext.Provider>
    );
}

export default TasksContextProvider;
