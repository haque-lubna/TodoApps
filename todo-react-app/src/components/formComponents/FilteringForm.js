import React from 'react'
import { Select } from './Select'
import { TextArea } from './TextArea'
import { Input } from './Input'
import { Range } from './Range'

export const FilteringForm = () => {
  return (
    <div className='row'>
      <h3>Filter your Task List</h3>
      <div className="row">
        <div className="col-md-4">
          <Select label= "Task Category" 
            fieldName="taskCategory"
            options={[{value: "", label: "Select Task Category"}, {value: "professional", label: "Professional"},
                {value: "personal", label: "Personal"}]} />
        </div>
        <div className="col-md-4">
          <Select label= "Task Sub-Category" 
            fieldName="taskSubCategory"
            options={[{value: "", label: "Select Task Sub-Category"}, {value: "myself", label: "MySelf"},
                {value: "office", label: "Office"}]} />
        </div>
        <div className="col-md-4">
          <Input label= "Task Title" 
            fieldName="taskTitle"
            placeholder="Write Task Title" />
        </div>
      </div>
      <div className="row mt-3">
        <div className='col-md-4'>
          <Range label="Priority" fieldName="priority"/>
        </div>
        <div className="col-md-4">
          <Input type="date" label="Deadline" fieldName="deadline" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8">
          <TextArea label="Task Description" fieldName="description" placeholder="Write your Task Description"/>
        </div>
      
      </div>
    </div>
  )
}
