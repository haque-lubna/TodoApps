import React from 'react'

export const SingleTask = () => {
  return (
    <div class="card">
      <div class="card-header">
        <h6 class="card-subtitle mb-2 text-muted">Category: Task Category</h6>
        <h6 class="card-subtitle mb-2 text-muted">Subcategory: Task Subcategory</h6>
      </div>
      <div class="card-body">
        <h5 class="card-title">Task Title</h5>
        <p class="card-text">Description: Task Description</p>
        <p class="card-text">Status: Task Status</p>
        <p class="card-text">Priority: Task Priority</p>
        <p class="card-text">Deadline: Task Deadline</p>
      </div>
    </div>
  )
}
