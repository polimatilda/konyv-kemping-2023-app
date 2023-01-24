import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Alert, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { getChosenGuild, getUserName } from '../contexts/ManageData'
import { ListGroup } from 'react-bootstrap'
import PromptsProfile from '../components/PromptsProfile'


function Dashboard() {


  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [guild, setGuild] = useState({})

  useEffect(() => {
    if (currentUser) {
      getUserName(currentUser.uid)
        .then(user => setName(user))
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser) {
      getChosenGuild(currentUser.uid)
        .then(user => setGuild(user))
    }
  }, [currentUser])


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
      <Row className='mb-3 small-caps'>
        <Col>
          <h1>Szép napot, {name}!</h1>
        </Col>
      </Row>
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
      <Row className='my-5'>
        <Row>
          <Col className='small-caps'>
            <h4>A kempingen választott céhed:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {Object.keys(guild).length > 0
              ? <Row>
                <Col>
                  <h2 className='mb-3'>{guild.name}</h2>
                  <ListGroup as="ol">
                    {guild.prompts.map((prompt, index) => <PromptsProfile key={index} prompt={prompt}/>)}
                  </ListGroup>
                </Col>
              </Row>
              : <h2>Még nem választottál céhet</h2>}
          </Col>
        </Row>
      </Row>
      
    </>
  )
}

export default Dashboard