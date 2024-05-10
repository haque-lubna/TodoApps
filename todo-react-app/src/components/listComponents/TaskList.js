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

export const TaskList = () => {
  return (
    <div className='mt-5'>
        <h3>Task List</h3>
        <div className='d-flex justify-content-start gap-3'>
            <SingleTask taskData={populateTask("Pending", "Personal", "Myself", "Prayer", "Esha", 98, "12 March, 2024")}/>
            <SingleTask taskData={populateTask("Completed", "Professional", "Office", "Submenu", "Dashboard", 14, "12 May, 2024")}/>
            <SingleTask taskData={populateTask("InProgress", "Personal", "Family", "Shopping", "Pant, Belt, Shirt", 79, "19 May, 2024")}/>
            <SingleTask taskData={populateTask("Canceled", "Professional", "HEMS", "Multiple", "Migration, Refactor, Data backup", 66, "13 February, 2024")}/>
            <SingleTask taskData={populateTask("Postpond", "Personal", "Family", "Calling", "Boro, Mejo, Choto", 54, "12 April, 2024")}/>
        </div>
    </div>
  )
}
