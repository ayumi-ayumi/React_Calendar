import React from 'react'
import { Link, useParams } from 'react-router-dom';
import done from '../images/icons8-ok-48.png'
import notDone from '../images/icons8-cancel-48.png'

export default function Todo() {
  let { date, month, year } = useParams();
  const registeredDate = `${date}-${month}-${year}`
  const [task, setTask] = React.useState("")
  const [todoListArr, setTodoListArr] = React.useState([])

  function handleChange(event) {
    setTask(prevList => event.target.value)
  }

  function addList(e) {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      value: task,
      checked: false
    };
    const newListArr = [...todoListArr, newTask];
    if (task !== "") setTodoListArr(newListArr)
    setTask("");
    localStorage.setItem(registeredDate, JSON.stringify(newListArr));
  }

  function checked(id) {
    const updatedTodoLists = [...todoListArr].map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodoListArr(updatedTodoLists);
    localStorage.setItem(registeredDate, JSON.stringify(updatedTodoLists));
  }

  function deleteTask(id) {
    const newListArrForDelete = todoListArr.filter((todoListArr) => todoListArr.id !== id)
    setTodoListArr(prev => newListArrForDelete)
    localStorage.setItem(registeredDate, JSON.stringify(newListArrForDelete));
  }

  function clearLists() {
    const confirm = window.confirm("Clear all?");
    if (confirm) {
      localStorage.removeItem(registeredDate);
      setTodoListArr([])
    }
  }

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  function submitEdits(id) {
    const updatedTodoLists = [...todoListArr].map((todo) => {
      if (todo.id === id && editingText !== "") {
        todo.value = editingText;
      }
      return todo;
    });

    setTodoListArr(updatedTodoLists);
    localStorage.setItem(registeredDate, JSON.stringify(updatedTodoLists));
    setTodoEditing(null);
    setEditingText("");
  }

  React.useEffect(() => {
    const newDate = JSON.parse(localStorage.getItem(registeredDate))
    if (newDate) {
      setTodoListArr(newDate)
    }
  }, [])

  const monthInt = parseInt(month)
  const yearInt = parseInt(year)

  const listLength = todoListArr.length
  const numberOfChecked = todoListArr ? todoListArr.filter(todo => todo.checked).length : 0
  const numberOfNotChecked = listLength - numberOfChecked
  const homeUrl = process.env.PUBLIC_URL;


  return (
    <>
      <Link to={`${homeUrl}/`} 
      state={{ month: monthInt-1, year:  yearInt}} 
      className="backToHome">Back to Calendar</Link>
      <div className='main--todo'>
        <div className="header--todo">
          <h1>Things To Do</h1>
          <div>{date}.{month}.{year}</div>
        </div>
        <div className='body--todo'>
          <form>
            <input
              type="text"
              placeholder="Finish styling the main page"
              className="form--addList"
              onChange={handleChange}
              value={task} />
            <button className='button--add' onClick={addList}>ADD</button>
          </form>

          {listLength !== 0 &&
            <button className='button--clearLists' onClick={clearLists}
              disabled={listLength === 0}
            >Clear</button>

          }

          <ul>
            {listLength !== 0 &&
              <div className='showingTotal'>
                <div className='showingTotal--number'>Total {listLength} tasks for today</div>
                <div className='numberOfChecked'>
                  <img src={done} />
                  <span>{numberOfChecked}</span>
                </div>
                <div className='numberOfNotChecked'>
                  <img src={notDone} />
                  <span>{numberOfNotChecked}</span>
                </div>
              </div>
            }

            {todoListArr.map((todo) => (
              <li key={todo.id} className="list">
                {todo.id === todoEditing ? (
                  <label>
                    <input
                      type="text"
                      placeholder={todo.value}
                      className="editingText"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)} />
                  </label>
                ) : (
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => checked(todo.id)}
                      checked={todo.checked}
                      id={`${todo.id}`} />
                    <label htmlFor={`${todo.id}`}>{todo.value}</label>
                  </div>
                )
                }

                <div className="buttons">
                  {todo.id === todoEditing ? (
                    <button onClick={() => submitEdits(todo.id)}>
                      <span className="material-symbols-outlined">done</span>
                    </button>
                  ) : (
                    <button onClick={() => setTodoEditing(todo.id)}>
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  )}

                  <button className='button--delete' onClick={() => deleteTask(todo.id)}>
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}