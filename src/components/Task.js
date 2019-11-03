import React, { useContext } from 'react';

import { TasksContext } from '../contexts/TasksContext';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Button  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import UpdateIcon from '@material-ui/icons/UpdateOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginBottom: "10px",
  },
  marginStyle: {
      margin: "10px 0px",
  }
}));

const Task = props => {

    const { handleUpdateTask, handleDeleteTask } = useContext(TasksContext);

    const classes = useStyles();
    
    return (
        
        <Paper className={classes.root} >
            <Typography variant="h5" component="h3">
                {props.taskContent.task_title}
            </Typography>
            <Typography component="p">
                {props.taskContent.task_description}
            </Typography>
            <Divider className={classes.marginStyle}/>
            <Typography component="p">
                Due Date: {props.taskContent.due_date}  &nbsp; | &nbsp;
                Status: {props.taskContent.task_status === 1 ? "Active" : "Done"}
                <div style={{float: "right"}}>
                    <Button size="small" onClick={(e) => handleUpdateTask(e, props.taskContent.id, props.toDoId)}>
                        <UpdateIcon /> Update
                    </Button>
                    <Button size="small" onClick={(e) => handleDeleteTask(e, props.taskContent.id, props.toDoId)}>
                        <DeleteIcon /> Delete
                    </Button>
                </div>
            </Typography>
        </Paper>        
    );
}

export default Task;