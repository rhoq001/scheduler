import React from 'react'
import {useState} from 'react'

const EditTask = ({currTask, onEditTask}) => {

  const [text, setText] = useState(currTask.text)
  const [day, setDay] = useState(currTask.day)
  const [reminder, setReminder] = useState(currTask.reminder)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Please add a task')
        return
    }

    const newTask = {id: currTask.id, text, day, reminder}

    onEditTask(newTask)
  }

  return (
    <div>
        <h1>
            Edit Task {currTask.id}
        </h1>
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} s/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    </div>
  )
}

export default EditTask