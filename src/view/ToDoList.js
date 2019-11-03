import React, { useContext } from 'react';
import ToDo from '../components/ToDo';
import { Link } from 'react-router-dom';
import { ToDosContext } from '../contexts/ToDosContext';

import { Grid, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    marginStyle: {
        margin: "10px 0px",
    }
  }));

const ToDoList = (props) => {
    
    const classes = useStyles();
    
    const { toDoList } = useContext(ToDosContext);
    
    // useEffect(() => {        
    //     fetchToDoList();
    // }, []);

    return(
        <div>
            <div>&nbsp;</div>
            <Button color="inherit"><Link to="/addToDo" style={{color: "#fff", textDecoration: "none"}}>Add To-Do</Link></Button>
            
            <Divider className={classes.marginStyle} />
            
            <Grid container spacing={3}>
                {toDoList.map(c => (                
                    <ToDo key={c.id} toDoContent={c} pHistory={props} />
                ))}
            </Grid>
        </div>
    );
}

export default ToDoList;