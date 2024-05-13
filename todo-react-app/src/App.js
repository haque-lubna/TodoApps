import { useState } from 'react';
import './App.css';
import { FilteringForm } from './components/formComponents/FilteringForm';
import { TaskList } from './components/listComponents/TaskList';
import {mockData} from './static/api/mockData.js'

function App() {
  const [taskList, setTaskList] = useState(mockData);
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    title: "",
    description: "",
    priority: 23,
    deadline: "",
    status: "",
  });
  return (
    <div className='container mt-5'>
      <FilteringForm formData={formData} setFormData={setFormData}/>
      <TaskList data = {taskList}/>
    </div>
  );
}

export default App;
