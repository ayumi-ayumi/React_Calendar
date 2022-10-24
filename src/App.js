import './App.css'
import Calendar from './Components/Calendar'
import {Route, Routes } from 'react-router-dom'
import Todo from './Components/Todo'
import Article from './Components/Article'
import Notfound from './Components/Notfound'

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Calendar />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/article/:number' element={<Article />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      {/* <Calendar /> */}
    </div>
  )
}

