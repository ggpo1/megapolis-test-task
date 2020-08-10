import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import TaskEditView from './views/TaskEditView';
import TaskListView from './views/TaskListView';
import Api from './api/Api';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async () => {
      let tasks = await Api.getTasks();
      setData(tasks);
    }) ();
  }, []);


  return (
    <div className="App">
      <div className={'app-sub'}>
        <Switch>
          <Route path="/items/:taskId" component={TaskEditView} />
          <Route path="/">
            <TaskListView data={data} />
          </Route>
        </Switch>
        <div className={'footer'}>© 2019 АО "Мегаполис"</div>
      </div>
    </div>
  );
}

export default App;
