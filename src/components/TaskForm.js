import React, {useContext} from 'react';

import { TasksContext } from '../contexts/TasksContext';

import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "98%",
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

const TaskForm = (props) => {
    
    const classes = useStyles();

    const { taskId, taskTitle, taskDescription, taskStatus, dueDate, createAt, handleInputChange, handleTaskSubmit } = useContext(TasksContext);

    return (
        <div>
            <form style={{width: "100%", backgroundColor: "#555"}} 
                onSubmit={(e) => handleTaskSubmit(e, taskId, taskTitle, taskDescription, dueDate, taskStatus, createAt, props)}>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Task Title"
                        className={classes.textField}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        value={taskTitle}
                        onChange={(e) => handleInputChange("TaskTitle", e.target.value)}
                        />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Task Disctiption"
                        multiline
                        rows="2"                    
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={taskDescription}
                        onChange={(e) => handleInputChange("TaskDescription", e.target.value)}
                        />
                </div>
                <div>
                    
                    <TextField
                        id="outlined-multiline-static"
                        label="Due Date"                                          
                        className={classes.textField}
                        type="date"
                        margin="normal"
                        variant="outlined"
                        value={dueDate}
                        onChange={(e) => handleInputChange("DueDate", e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}                       
                        />
                </div>
                {taskId &&
                    <div>                    
                        <TextField
                            id="outlined-multiline-static"
                            label="Task Status"                                          
                            className={classes.textField}
                            type="text"
                            margin="normal"
                            variant="outlined"
                            value={taskStatus}
                            onChange={(e) => handleInputChange("TaskStatus", e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}                       
                            />                                        
                        <TextField
                            id="outlined-multiline-static"
                            label="Created At"                                          
                            className={classes.textField}
                            type="text"
                            disabled
                            margin="normal"
                            variant="outlined"
                            value={createAt}                            
                            InputLabelProps={{
                                shrink: true,
                            }}                       
                            />
                    </div>
                }
                <div>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>                        
                        { taskId ? "Update Task" : "Add Task" }
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;