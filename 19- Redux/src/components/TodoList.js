import React,{useState} from 'react'
import {useSelector} from "react-redux"
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';
const TodoList = () => {

  const todos=useSelector(state =>state.todo.todolist);
  const [showDone, setshowDone] = useState(false)
  return (
    <div className='todo-list'>
      <AddTodo/>
      <button onClick={()=>setshowDone(!showDone)}>{showDone?"done":"show undone"}</button>
      {
        todos.filter((todo)=>todo.isDone===showDone).map((todo)=>(
      <TodoItems todo={todo}/>
        ))}
    </div>
  )
}

export default TodoList