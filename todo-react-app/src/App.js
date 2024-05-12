import { useState } from 'react';
import './App.css';
import { FilteringForm } from './components/formComponents/FilteringForm';
import { TaskList } from './components/listComponents/TaskList';
import {mockData} from './static/api/mockData.js'

function App() {
  const [taskList, setTaskList] = useState(mockData)
  return (
    <div className='container mt-5'>
      <FilteringForm/>
      <TaskList data = {taskList}/>
    </div>
  );
}

export default App;
