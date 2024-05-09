import './App.css';
import { FilteringForm } from './components/formComponents/FilteringForm';
import { TaskList } from './components/listComponents/TaskList';

function App() {
  return (
    <div className='container m-5 p-5'>
      <FilteringForm/>
      <TaskList/>
    </div>
  );
}

export default App;
