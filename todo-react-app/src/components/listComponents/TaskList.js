import React from 'react'
import { SingleTask } from './SingleTask'

export const TaskList = () => {
  return (
    <div className='mt-5'>
        <h3>Task List</h3>
        <div className='d-flex justify-content-start gap-3'>
            <SingleTask/>
            <SingleTask/>
            <SingleTask/>
        </div>
    </div>
  )
}
