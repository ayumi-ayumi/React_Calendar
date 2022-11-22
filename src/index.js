import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Calendar from 'Components/Calendar'
import Todo from 'Components/Todo'
import Article from 'Components/Article'
import Notfound from 'Components/Notfound'


// const router = createBrowserRouter([
//   {path:'/',
//   element: (<Calendar />),
//   errorElement: (<Notfound />)
//   },
//   {path:'/todo/:date',
//   element: (<Todo />)
//   },
//   {path:'/article/:number',
//   element: (<Article />)
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  )
  
    // <React.StrictMode>
    //   <BrowserRouter>
    //     <App />
    //   </BrowserRouter>
    // </React.StrictMode>