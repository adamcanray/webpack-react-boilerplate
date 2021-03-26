import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      I am a Landing Page
      <Link to="/app/components">components</Link>
    </div>
  )
}
