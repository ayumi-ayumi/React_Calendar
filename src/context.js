import React from 'react'

const CountContext = React.createContext();

export function useCountContext() {
  return React.useContext(CountContext);
}

export function CountProvider({ children }) {
  const [todoListArr, setTodoListArr] = React.useState([1,2,3])

  const value = {
    todoListArr,
    setTodoListArr,
  };
  // const [count, setCount] = React.useState(100);

  // const value = {
  //   count,
  //   setCount,
  // };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}