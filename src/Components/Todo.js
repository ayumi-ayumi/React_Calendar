import React from 'react'
import { useParams } from 'react-router-dom';

export default function Todo () {
  let {date} = useParams();
  const [list, setList] = React.useState("")
  const [listArr, setListArr] = React.useState([])

  function handleChange(event) {
    // console.log(event.target.value)
    setList(prevList => event.target.value)
  }

  function AddList () {
    // listArr.push(list)
    const newListArr = [...listArr, list];
    setListArr(newListArr)
    setList("");
    localStorage.setItem(date, JSON.stringify(newListArr));
    console.log(newListArr)
  }

  React.useEffect (()=> {
    const newDate = JSON.parse(localStorage.getItem(date))
    if(newDate) {
      setListArr(newDate)
    }
  }, [])
  
  
  return (
    <>
      <h1>TODO LIST {date}</h1>
      <input
      type="text"
      placeholder="Wake up at 6"
      className="form--addList" 
      onChange={handleChange}
      value={list}
      />
      <button className='button--add' onClick={AddList}>ADD</button>
      <ul>
      {listArr.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
      </ul>
    </>
  )
}