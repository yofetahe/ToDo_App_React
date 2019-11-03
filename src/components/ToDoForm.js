import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

// import useFormInput from '../components/useFormInput';
import {ToDosContext} from '../contexts/ToDosContext';

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

const ToDoForm = (props) => {

    const classes = useStyles();

    const { id, title, description, handleInputChange, handleToDosSubmit } = useContext(ToDosContext);
    
    return (
        <div>
            <div style={{height: "55px", paddingTop: "20px", borderBottom: "solid 1px gray", marginBottom: "10px"}}>
                <Link to="/" style={{color: "#fff", textDecoration: "none"}}>TO-DO List</Link> &nbsp; > &nbsp; <span style={{color:"#555"}}>To-Do Add Form</span>
            </div>
            
            <form style={{width: "100%", backgroundColor: "#555"}} onSubmit={(e) => handleToDosSubmit(e, title, description, props)}>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="To-Do Title"
                        className={classes.textField}
                        type="text"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value={title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="To-Do Disctiption"
                        multiline
                        rows="4"                    
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        />
                </div>
                <div>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>                        
                        {id? "Update To-Do" : "Add To-Do"} 
                    </Button>
                </div>
            </form>           
        </div>
    );
}

export default ToDoForm;