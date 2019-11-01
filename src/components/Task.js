import React from 'react';
// import $ from 'jquery'

const Task = props => {
    
    return (
        <li class="collection-item">
            <h5>{props.taskContent.task_title}</h5>
            <div>{props.taskContent.task_description}</div>
            <div className="row" style={{borderTop: "solid 1px gray", paddingTop: "10px", marginTop: "20px"}}>
                <div className="col s3">Due Date: {props.taskContent.due_date}</div>
                <div className="col s5">                    
                    <div className="row">
                        <div className="col s3">Task Status: </div>
                        <label className="col s3">
                            <input name="group1" type="radio" checked />
                            <span>New</span>
                        </label>
                        <label className="col s3">
                            <input name="group1" type="radio" checked />
                            <span>Inprocess</span>
                        </label>
                        <label className="col s3">
                            <input name="group1" type="radio" checked />
                            <span>Done</span>
                        </label>
                    </div>
                </div>
                <div className="col s2">
                    <button className="waves-effect waves-light btn-small">Update</button>
                </div>
                <div className="col s2">
                    <button className="waves-effect waves-light btn-small">Delete</button>
                </div>
            </div>
        </li>
    );
}

// $(document).ready(function(){
//     $('select').formSelect();
//   });

export default Task;