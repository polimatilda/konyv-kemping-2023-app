import { useAuth } from '../contexts/AuthContext'
import React, { useRef } from 'react'
import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function UpdateProfile() {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {currentUser, passwordUpdate, emailUpdate } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []

    setLoading(true)
    setError('')

    if(emailRef.current.value !== currentUser.email) {
      promises.push(emailUpdate(emailRef.current.value))
    }

    if(passwordRef.current.value) {
      promises.push(passwordUpdate(passwordRef.current.value))
    }

    Promise.all(promises).then(() => {
      navigate("/")
    }).catch(() => {
      setError('Failed to update account')
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <Card className='w-100' style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Profil frissítése</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control type='password' ref={passwordRef} placeholder='Csak változtatás esetén töltsd ki!'/>
            </Form.Group>
            <Form.Group id="password-confirm">
                <Form.Label>Password confirmation</Form.Label>
                <Form.Control type='password' ref={passwordConfirmRef} placeholder='Csak változtatás esetén töltsd ki!' />
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-2'>Profil frissítése</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to="/">Mégsem</Link>
      </div>
    </>
  )
}

export default UpdateProfile