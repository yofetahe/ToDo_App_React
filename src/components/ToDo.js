import React from 'react';
import { Link } from 'react-router-dom';

const ToDo = props => {
    
    return (        
        <div className="col s4">
            <div className="card grey lighten-4">
                <div className="card-content">
                    <span className="card-title">{props.toDoContent.title}</span>
                    <p>{props.toDoContent.description}</p>
                    <div>No. Tasks: {props.toDoContent.task.length}</div>   
                </div>
                <div className="card-action">
                    <Link to={`/ToDoTasks/${props.toDoContent.id}`}>View Tasks</Link>
                    <Link to={`/ToDoDelete/${props.toDoContent.id}`}>Delete Tasks</Link>
                </div>
            </div>
        </div>
    );
}

export default ToDo;