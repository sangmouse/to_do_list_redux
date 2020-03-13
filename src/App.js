
import React,{Component} from 'react';
import './App.css';
import Control from './components/Control';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Demo from './training/Demo'




class App extends Component {

 
  render() {
    
    return (
        <div className="main">
            <div className="container">
              <div className="text-center">
                <h1 className="title">Work Management</h1>
              </div>
              <div className="row">  
                <div className="col-4">
                  <TaskForm></TaskForm>
                </div>
                <div className='col-8'>
                  <Control></Control>
                  <TaskList></TaskList>
                  
                </div>
              </div>  
            </div>
          </div>
    );
}
}

export default App;
