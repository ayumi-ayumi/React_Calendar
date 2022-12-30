import React from 'react'
import { useRouteError } from 'react-router-dom';

export default function Notfound () {
    let error = useRouteError();
    console.error(error);
  return (
    <h1>
      {error.statusText}
    </h1>
  )
}