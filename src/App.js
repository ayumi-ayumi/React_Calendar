import './App.css'
import Calendar from './Components/Calendar'
import {Route, Routes, useParams } from 'react-router-dom'
import Todo from './Components/Todo'
import Article from './Components/Article'
import Notfound from './Components/Notfound'
import React from 'react'

export default function App() {
  // const [todoListArr, setTodoListArr] = React.useState([])

  // const listLength = todoListArr.length

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Calendar />} errorElement={<Notfound />}/>
        
        <Route path='/todo/:date/:month/:year' 
        element={<Todo 
        // todoListArr={todoListArr}
        // setTodoListArr={setTodoListArr}
        // listLength={listLength}
        />} />
        
        <Route path='/article/:number' element={<Article />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

{/* <Calendar /> */}