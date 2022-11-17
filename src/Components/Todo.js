import React from 'react'
import { useParams } from 'react-router-dom';

export default function Todo() {
  let { date } = useParams();
  const [task, setTask] = React.useState("")
  const [todoListArr, setTodoListArr] = React.useState([])
  
  function handleChange(event) {
    setTask(prevList => event.target.value)
  }
  
  function AddList(e) {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      value: task,
    };
    const newListArr = [...todoListArr, newTask];
    setTodoListArr(newListArr)
    if (task !== "") setTodoListArr(newListArr)
    setTask("");
    localStorage.setItem(date, JSON.stringify(newListArr));
  }
  
  function DeleteTask(id) {
    const newListArrForDelete = todoListArr.filter((todoListArr) => todoListArr.id !== id)
    setTodoListArr(prev => newListArrForDelete)
    console.log(newListArrForDelete)
  }
  
  function ClearLists() {
    const confirm = window.confirm("Clear all?");
    if (confirm) localStorage.clear();
    // if (confirm) return setTodoListArr([]);
    return setTodoListArr([])
  }

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  function submitEdits(id) {
    const updatedTodoLists = [...todoListArr].map((todo) => {
      if (todo.id === id) {
        todo.value = editingText;
      }
      return todo;
    });
    
    setTodoListArr(updatedTodoLists);
    setTodoEditing(null);
    setEditingText("");
  }

  React.useEffect(() => {
    const newDate = JSON.parse(localStorage.getItem(date))
    if (newDate) {
      setTodoListArr(newDate)
    }
  }, [])

  const listLength = todoListArr.length
  console.log(todoEditing)

  return (
    <div
      className={`${listLength > 5 ? "moreThan5" : "lessThan5"}`}
    >
      <h1>TODO LIST {date}</h1>
      <form>
        <input
          type="text"
          placeholder="Wake up at 6"
          className="form--addList"
          onChange={handleChange}
          value={task}
        />
        <button className='button--add' onClick={AddList}>ADD</button>
      </form>
      <div>Total {listLength} tasks for today</div>

      <button className='button--clearLists' onClick={ClearLists} disabled = { todoListArr.length === 0 }>Clear Lists</button>
      <ul>
        {todoListArr.map((todo) => (
          <li key={todo.id} className="list">
            {todoEditing === todo.id ? (
          <label>
              <input
                type="text"
                placeholder={todo.value}
                className=""
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
          </label>
            ) : (
            <label>
              <input type="checkbox" />
              {todo.value}
          </label>
            )
            }
            
            <div className="buttons">

            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>
                <span class="material-symbols-outlined">done</span>
              </button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>
                <span class="material-symbols-outlined">edit</span>
              </button>
            )}

            <button className='button--delete' onClick={() => DeleteTask(todo.id)}>
              <span class="material-symbols-outlined">delete</span>
            </button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
{/* <li key={index}>{todo}</li> */ }