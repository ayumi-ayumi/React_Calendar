import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Todo() {
  let { date, month, year} = useParams();
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
    console.log(newListArr)
    setTask("");
    localStorage.setItem(registeredDate, JSON.stringify(newListArr));
  }

  function checked (id) {
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
    if (confirm) localStorage.clear();
    return setTodoListArr([])
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

  const listLength = todoListArr.length
  
  return (
    <>
    <Link to={'/'}>Back to Calendar</Link>
    <div
      className={`${listLength > 5 ? "moreThan5" : "lessThan5"}`}
    >
      <h1>TODO LIST {date} {month} {year}</h1>
      <form>
        <input
          type="text"
          placeholder="Wake up at 6"
          className="form--addList"
          onChange={handleChange}
          value={task}
        />
        <button className='button--add' onClick={addList}>ADD</button>
      </form>
      <div>Total {listLength} tasks for today</div>

      <button className='button--clearLists' onClick={clearLists} 
      disabled = { listLength === 0 }
      >Clear</button>
      
      <ul>
        {todoListArr.map((todo) => (
          <li key={todo.id} className="list">
            {todo.id === todoEditing ? (
              <label>
                  <input
                    type="text"
                    placeholder={todo.value}
                    className=""
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}/>
              </label>
            ) : (
              <div>
                <input type="checkbox" onChange={()=>checked(todo.id)} checked={todo.checked}/>
                <label>{todo.value}</label>
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
    </>
  )
}