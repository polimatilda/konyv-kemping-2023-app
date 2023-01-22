import { useAuth } from '../contexts/AuthContext'
import React, { useRef } from 'react'
import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  return (
    <>
      <Card className='w-100' style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Bejelentkezés</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-2 bg-indigo'>Bejelentkezés</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to="/forgot-password">Elfelejtetted a jelszavadat?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Nincs fiókod? <Link to="/signup">Regisztrálj!</Link>
      </div>
    </>
  )
}

export default Login