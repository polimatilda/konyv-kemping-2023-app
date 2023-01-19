import { useAuth } from '../contexts/AuthContext'
import React, { useRef } from 'react'
import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('További utasításokért tekintse meg a beérkező leveleit!')
    } catch {
      setError('A jelszó visszaállítása sikertelen.')
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Jelszó visszaállítása</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-2'>Jelszó visszaállítása</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to="/login">Bejelentkezés</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Nincs még fiókod? <Link to="/signup">Regisztrálj!</Link>
      </div>
    </>
  )
}

export default ForgotPassword