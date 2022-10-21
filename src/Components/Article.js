import React from 'react'
import { BrowserRouter, Route, Link, Switch, Routes, useParams } from 'react-router-dom'

export default function Article () {
  let {number} = useParams();
  return (
    <h1>
      Article {number}
    </h1>
  )
}