import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <div>
      <h1>Cat Facts</h1>
      <Link to={`/cat`}>
      <Button>Get Facts</Button>
      </Link>
    </div>
  )
}
