import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}/> 
        </h3>
        <p>{task.day} <Button onClick={() => onEdit(task)} color='black' text='Edit' buttonStyle={'btn-small btn-right'}/></p>
    </div>
  )
}

export default Task