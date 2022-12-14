import Calendar from './Components/Calendar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Todo from './Components/Todo'
import Article from './Components/Article'
import Notfound from './Components/Notfound'
import React from 'react'

// export default function App() {

//   return (
//     <div className="App">
//       <Calendar />
//     </div>
//   )
// }

const homeUrl = process.env.PUBLIC_URL;

const router = createBrowserRouter([
  {path: homeUrl,
  element: (<Calendar />),
  errorElement: (<Notfound />)
  },
  {path: homeUrl+'/todo/:date/:month/:year',
  element: (<Todo />)
  },
  {path: homeUrl+'/article/:number',
  element: (<Article />)
  }
])

const App = () => <RouterProvider router={router}/>;
export default App;


{/* <Routes>
  <Route path='/' element={<Calendar />} errorElement={<Notfound />}/>
  <Route path='/todo/:date/:month/:year' element={<Todo />} />
  <Route path='/article/:number' element={<Article />} />
  <Route path='/*' element={<Notfound />} />
</Routes> */}