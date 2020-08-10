import React from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import TaskEditView from './views/TaskEditView';
import TaskListView from './views/TaskListView';

function App() {
  // const [data, setData] = useState([]);
  let history = useHistory();
  
  return (
    <div className="App">
      <div className={'app-sub'}>
        <Switch>
          <Route path="/items/:taskId" component={TaskEditView} />
          <Route path="/">
            <TaskListView history={history} />
          </Route>
        </Switch>
        <div className={'footer'}>© 2019 АО "Мегаполис"</div>
      </div>
    </div>
  );
}

export default App;
