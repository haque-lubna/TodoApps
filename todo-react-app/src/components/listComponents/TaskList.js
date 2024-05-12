import React from 'react'
import { SingleTask } from './SingleTask'

const populateTask = (status, category, subcategory, title, description, priority, deadline) => {
  const task = {
    status: status, 
    category: category, 
    subcategory: subcategory,
    title: title,
    description: description,
    priority: priority,
    deadline: deadline,
  }
  return task
}

export const TaskList = ({data}) => {
  return (
    <div className='mt-5'>
        <h3>Task List</h3>
        <div className='row gap-3'>
          {data.map((rowData, i) => (
              <SingleTask key={i} taskData={rowData}/>
          ))}
        </div>
    </div>
  )
}
