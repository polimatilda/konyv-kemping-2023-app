import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function ProfileDetails({currentUser, logout}) {

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
      <Card className='w-100 mt-5' style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Bejelentkezési adatok</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <p>
            <strong>E-mail: </strong> {currentUser.email}
          </p>
          <Link to="/update-profile" className='btn btn-primary w-100 mt-3 text-white'>Adatok frissítése</Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2 mb-5'>
        <Button variant='link' onClick={handleLogout} className="logout-btn" >Kijelentkezés</Button>
      </div>
    </>
  )
}

export default ProfileDetails