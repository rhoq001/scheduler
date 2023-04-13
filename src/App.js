import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)
  const [currentTask, setCurrentTask] = useState({})
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'task1',
          day: '1/3/4123'
      },

      {
        id: 2,
        text: 'task2',
        day: '1/3/7060'
      },

      {
        id: 3,
        text: 'task3',
        day: '6/5/1221'
      },
    ]
  )

  const addTask = (task) => {
    const id = 5
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    }

  const editTask = (editedTask) => {
    setTasks(tasks.map((task) => task.id === editedTask.id ? editedTask : task))
    setShowEditTask(!showEditTask)
  }

  const onEdit = (task) => {
    setShowEditTask(!showEditTask)
    setCurrentTask(task)
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      {!showEditTask ?
        <div>
          <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask && <AddTask onAddTask={addTask}/>}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onEdit={onEdit}/> : 'No Tasks To Show'}
        </div>
        :
        <div>
          <EditTask onEditTask={editTask} currTask={currentTask}/>
        </div>
      }
    </div>
  );
}

export default App
