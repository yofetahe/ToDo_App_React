import React, { useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { TasksContext } from '../contexts/TasksContext';

const Tasks = (props) => {
    console.log("Tasks >>>> ", props)
    const { toDo, tasks, fetchTaskList } = useContext(TasksContext);
    
    useEffect(() => {
        fetchTaskList(props.match.params.id);
    }, [])

    return (               
        <div>
            <div style={{height: "55px", paddingTop: "20px"}}>
                <Link to="/" style={{color: "orange"}}>To-Do List</Link> / Tasks
            </div>
            <ul class="collection with-header">
                <li class="collection-header">
                    <h4>To-Do: {toDo && toDo.title}</h4>
                </li>
                {tasks && tasks.map(t => (
                    <Task key={t.id} taskContent={t} />
                ))}
            </ul>
            <div>
                <TaskForm toDo={toDo} props={props} />
            </div>
        </div>         
    );
}

export default Tasks;