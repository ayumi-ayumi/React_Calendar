import React from 'react'

export default function Todo () {
  const [list, setList] = React.useState("")
  const [listArr, setListArr] = React.useState([])


  function AddList () {
    console.log(list)
    listArr.push(list)
    console.log(listArr)
  }

  function handleChange(event) {
    setList(prevList => event.target.value)
    // console.log(list)
  }

  return (
    <>
      <input
      type="text"
      placeholder="Wake up at 6"
      className="form--addList" 
      onChange={handleChange}
      />
      <button className='button--add' onClick={AddList}>ADD</button>
      <h1>TODO LIST</h1>
      {listArr.map((todo) => (
              <ul>
                <li>{todo}</li>
              </ul>
            ))}
    </>
  )
}