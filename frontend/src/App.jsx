import { useEffect, useState } from 'react'
import CreateTodo from "./Components/CreateTodo"
import './App.css'
import Todos from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch("http://localhost:3000/todos")
      const json = await response.json()
      setTodos(json.todos)
  };
  fetchData()
  },[])

  return (
   <div>
    <CreateTodo/>
    <Todos todos={todos}/>
   </div>
  )
}

export default App
