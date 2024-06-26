import React, { useState } from 'react'
import { SingleTask } from './SingleTask'
import { Modal } from '../common/Modal'
import { FilteringForm } from '../formComponents/FilteringForm'

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <React.Fragment>
      {isModalOpen && (<Modal closeModal={() => setIsModalOpen(false)}>
        <FilteringForm formData={formData} setFormData={setFormData}/>
      </Modal>)}
      <div className='mt-5 border-top pt-3'>
        <div className='d-flex justify-content-start gap-2 mb-2'>
          <h4 className='me-2'>Task List</h4>
          <button className='btn btn-sm btn-primary' onClick={() => setIsModalOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </button>
        </div>
        <div className='row gap-4'>
          {data.map((rowData, i) => (
              <SingleTask key={i} taskData={rowData}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}
