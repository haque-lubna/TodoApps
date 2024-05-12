import React from 'react'
import { Range } from '../formComponents/Range'

export const SingleTask = ({taskData}) => {
  return (
    <div class="col-md-3 card">
      <div class="card-header">
        <div className='d-flex justify-content-between'>
          <span class="p-2 rounded bg-warning fw-bold">{taskData.status}</span>
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
        <p class="card-text">Deadline: {taskData.deadline}</p>
      </div>
    </div>
  )
}
