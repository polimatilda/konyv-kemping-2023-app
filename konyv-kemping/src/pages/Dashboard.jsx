import React from 'react'
import { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {

  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState("")

  const handleLogout = async () => {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profil</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>E-mail: </strong> {currentUser.email}
          <Link to="/update-profile" className='btn btn-primary w-100 mt-3 text-white'>Profil frissítése</Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout} className="logout-btn" >Kijelentkezés</Button>
      </div>
    </>
  )
}

export default Dashboard