import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import ToDoList from './view/ToDoList';
import Tasks from './view/Tasks';
import ToDoForm from './components/ToDoForm';
import TasksContextProvider from './contexts/TasksContext';
import ToDosContextProvider from './contexts/ToDosContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />        
        <div className="container">
          <Switch>
            <ToDosContextProvider>
              <TasksContextProvider>
                <Route exact path="/" component={ToDoList} />              
                <Route exact path="/addToDo" component={ToDoForm} />                        
                <Route exact path="/ToDoTasks/:id" component={Tasks} />
              </TasksContextProvider> 
            </ToDosContextProvider>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
