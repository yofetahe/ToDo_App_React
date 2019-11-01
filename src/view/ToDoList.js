import React, { useEffect, useContext } from 'react';
import ToDo from '../components/ToDo';
import { Link } from 'react-router-dom';
import {ToDosContext} from '../contexts/ToDosContext';

const ToDoList = () => {

    // const { dispatch } = useContext(ToDosContext);
    const {toDoList, fetchToDoList} = useContext(ToDosContext);

    useEffect(() => {
        fetchToDoList();
        // dispatch({type: 'GET_TODOS'})
    }, []);

    return(
        <div>
            <div style={{height: "55px", padding: "10px 0px", borderBottom: "solid 1px gray"}}>
                <Link to="/addToDo" className="waves-effect waves-light btn-small">Add To-Do</Link>
            </div>
            <div className="row">
                {toDoList.map(c => (                
                    <ToDo key={c.id} toDoContent={c} />                
                ))}
            </div>
        </div>
    );
}

export default ToDoList;