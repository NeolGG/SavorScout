import React from 'react'
import { Link } from 'react-router-dom'
import './HomeButton.css';

export default function HomeButton() {
  return (
    <div><h1><Link to="/" className="title">SavorScout</Link></h1></div>
  )
}
