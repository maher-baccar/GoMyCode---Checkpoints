import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/todoSlice/TodoSlice'

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false,
  })
  return (
    <div className='add-task'>
      <input type="text" placeholder='enter title task' onChange={(e)=>{setTask({...task,title:e.target.value})}}/>
      <input type="text" placeholder='enter description task'onChange={(e)=>{setTask({...task,description:e.target.value})}}/>
      <button onClick={()=> dispatch(addTask(task))}>Add new task</button>
    </div>
  )
}

export default AddTodo