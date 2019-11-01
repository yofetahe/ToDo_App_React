import React, {useContext} from 'react';
import useFormInput from '../components/useFormInput';

import { TasksContext } from '../contexts/TasksContext';

const TaskForm = (props) => {

    const { handleTaskSubmit } = useContext(TasksContext);

    const title = useFormInput("");
    const description = useFormInput("");
    const dueDate = useFormInput("");

    return (
        <div className="z-depth-2 card-panel grey lighten-4">            
            <div className="row">
                <form className="col s12" onSubmit={(e) => handleTaskSubmit(e, title, description, dueDate, props)}>
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
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="due_date" type="text" className="validate" {...dueDate}/>
                            <label for="due_date">Due Date</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Task</button>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;