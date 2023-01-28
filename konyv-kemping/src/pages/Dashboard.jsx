import React, { useEffect } from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { getChosenGuild, getUserName } from '../contexts/ManageData'
import ProfileDetails from '../components/ProfileDetails'
import ProfileGuild from '../components/ProfileGuild'

function Dashboard() {


  const { currentUser, logout } = useAuth()

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
        .then(guild => setGuild(guild))
    }
  }, [currentUser])

  return (
    <>
      <Row className='mb-3 small-caps'>
        <Col>
          <h1>Szép napot, {name}!</h1>
        </Col>
      </Row>
      <ProfileDetails currentUser={currentUser} logout={logout} />
      <ProfileGuild guild={guild} />
    </>
  )
}

export default Dashboard