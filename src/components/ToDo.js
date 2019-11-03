import React, { useContext } from 'react';

import { ToDosContext } from '../contexts/ToDosContext';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, Divider, CardContent, Button, Typography, Grid } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ToDo = props => {

    const {  handleUpdateToDo, handleToDoDeletion, handleNavigation  } = useContext(ToDosContext);
    
    const classes = useStyles();
    
    return (        
        <Grid item lg={3} md={6} sm={12}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.toDoContent.title} 
                        <Button size="small" onClick={() => handleNavigation(props.toDoContent.id, props)} style={{float: "right"}}>
                            <ViewModuleIcon/>
                        </Button>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.toDoContent.description}
                    </Typography>
                    <Typography>
                        Tasks: {props.toDoContent.task && props.toDoContent.task.length}
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button size="small" onClick={(e) => handleUpdateToDo(e, props.toDoContent.id, props)}>
                        <UpdateIcon/> Update
                    </Button>
                    <Button size="small" onClick={(e) => handleToDoDeletion(e, props.toDoContent.id, props)}>
                        <DeleteIcon /> Delete
                    </Button>
                </CardActions>
            </Card>           
        </Grid>
    );
}

export default ToDo;