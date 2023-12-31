import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <h1>About the project</h1>
      <p>This is a React app to leave feedback for a product or a service</p>
      <p>Version:1.0.0</p>
      <p><Link to="/">Back to Home</Link></p>
    </Card>
  )
}

export default AboutPage
