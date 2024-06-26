import React, { useState } from 'react'
import { Range } from '../formComponents/Range';
import { Modal } from '../common/Modal';
import { FilteringForm } from '../formComponents/FilteringForm';
export const SingleTask = ({taskData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(taskData);
  const [isDeleting, setIsDeleting] = useState(false);

  const openDeleteModal = () => {
    setIsDeleting(true);
    setIsModalOpen(true);
  }

  const closeDeleteModal = () => {
    setIsDeleting(false);
    setIsModalOpen(false);
  }

  return (
    <React.Fragment>
      {isDeleting && isModalOpen && (<Modal closeModal={closeDeleteModal}>
        <div className='d-flex justify-content-center'>
          <div className='card col-auto p-5'>
            <h4 className='row'>Are you sure to delete this task?</h4>
            <div className='d-flex justify-content-end gap-2'>
              <button className='btn btn-sm btn-danger' onClick={closeDeleteModal}>Cancel</button>
              <button className='btn btn-sm btn-success' onClick={closeDeleteModal}>Yes</button>
            </div>
          </div>
        </div>
      </Modal>)}

      {!isDeleting && isModalOpen && (<Modal closeModal={() => setIsModalOpen(false)}>
        <FilteringForm formData = {formData} setFormData={setFormData}/>
      </Modal>)}
      
      <div class="col-md-3 card">
        <div class="card-header">
          <div className='d-flex justify-content-between'>
            {taskData.status === 'Pending' && <span class="p-2 rounded text-white fw-bold bg-warning fw-bold">{taskData.status}</span>}
            {taskData.status === 'Postponed' && <span class="p-2 rounded text-white fw-bold bg-info fw-bold">{taskData.status}</span>}
            {taskData.status === 'Cancelled' && <span class="p-2 rounded text-white fw-bold bg-danger fw-bold">{taskData.status}</span>}
            {taskData.status === 'InProgress' && <span class="p-2 rounded text-white fw-bold bg-primary fw-bold">{taskData.status}</span>}
            {taskData.status === 'Completed' && <span class="p-2 rounded text-white fw-bold bg-success fw-bold">{taskData.status}</span>}
            <div>
              <h6 class="fw-bold mb-1 fs-14">{taskData.category}</h6>
              <h6 class="mb-1 text-muted fs-12">{taskData.subcategory}</h6>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{taskData.title}</h5>
          <p class="card-text">{taskData.description}</p>
          <p class="card-text"><Range disabled="true" value={taskData.priority}/></p>
          <div class="card-text d-flex justify content-between gap-2">
            <span className='fs-12'>Deadline: {taskData.deadline}</span>
            <span className='d-flex justify-content-start gap-2'>
              <button type='button' className='btn btn-sm btn-primary' onClick={() => setIsModalOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                </svg>
              </button>
              <button type="button" className="btn btn-sm btn-danger" onClick={openDeleteModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
