import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { TasksContext } from '../contexts/TasksContext';
import ApiCall from "../api/ApiCall";

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MLink from '@material-ui/core/Link';

const Tasks = (props) => {
    
    const { toDo, tasks, taskSetting, toDoSetting } = useContext(TasksContext);
    
    useEffect(() => {
        ApiCall.get(`/getTaskListByToDoListId/${props.match.params.id}`).then(response => {
            toDoSetting(response.data)
            taskSetting(response.data.task);
        })
    }, [toDo])

    return (               
        <div>
            <div style={{height: "55px", paddingTop: "20px", borderBottom: "solid 1px gray", marginBottom: "10px"}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <MLink color="inherit" href="/">
                        <Link to="/" style={{color: "#555", textDecoration: "none"}}>TO-DO List</Link>
                    </MLink>
                    <Typography color="textPrimary">Tasks</Typography>
                </Breadcrumbs>               
            </div>
            
            <div>
                <Typography variant="h4" component="h2">
                    To-Do: {toDo && toDo.title}
                </Typography>
                
                {tasks && tasks.map(t => (
                    <Task key={t.id} taskContent={t} toDoId={toDo.id} />
                ))}
            </div>
            <div>
                <TaskForm toDo={toDo} props={props} />
            </div>
        </div>         
    );
}

export default Tasks;