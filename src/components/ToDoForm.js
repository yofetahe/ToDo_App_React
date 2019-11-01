import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import useFormInput from '../components/useFormInput';
import {ToDosContext} from '../contexts/ToDosContext';

const ToDoForm = (props) => {

    const { handleToDosSubmit } = useContext(ToDosContext);
    
    const title = useFormInput("");
    const description = useFormInput("");

    return (
        <div>
            <div style={{height: "55px", paddingTop: "20px"}}>
                <Link to="/" style={{color: "orange"}}>To-Do List</Link> / To-Do Add Form
            </div>
            <div className="row z-depth-2 card-panel grey lighten-4">
                <form className="col s12" onSubmit={(e) => handleToDosSubmit(e, title, description, props)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="title" type="text" className="validate" {...title}/>
                            <label for="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="description" type="text" className="validate" {...description}/>
                            <label for="description">Description</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add To-Do</button>
                </form>
            </div>
        </div>
    );
}

export default ToDoForm;