import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Form, Button, Card, Row, Col, ListGroup, Alert } from 'react-bootstrap'
import TbrList from '../components/TbrList'
import { useAuth } from '../contexts/AuthContext'
import { addToTBR, getChosenGuild, getTBR } from '../contexts/ManageData'

function TBR() {

  const titleRef = useRef()
  const authorRef = useRef()
  const promptRef = useRef()

  const { currentUser } = useAuth()

  const [prompts, setPrompts] = useState([])
  const [isGuildChosen, setIsGuildChosen] = useState(false)
  const [addBook, setAddBook] = useState([])
  const [tbr, setTbr] = useState([])
  const [bookAlert, setBookAlert] = useState(false)
  const [emptyFieldAlert, setEmptyFieldAlert] = useState(false)

  useEffect(() => {
    if (currentUser) {
      getChosenGuild(currentUser.uid)
        .then(user => user.prompts === undefined ?setIsGuildChosen(false) : setIsGuildChosen(true))
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser && isGuildChosen) {
      getChosenGuild(currentUser.uid)
        .then(user => setPrompts(user.prompts))
    }
  }, [currentUser, isGuildChosen])

  const handleSubmit = async (event) => {
    
    event.preventDefault()

    if(titleRef.current.value && authorRef.current.value) {

      setAddBook(({
        title: titleRef.current.value,
        author: authorRef.current.value,
        prompt: promptRef.current.value,
        isRead: false
      }))
  
      setBookAlert(true)
  
      titleRef.current.value = ""
      authorRef.current.value = ""

    } else {
      setEmptyFieldAlert(true)
    }

  }

  useEffect(() => {
    if (currentUser && Object.keys(addBook).length > 0) {
      addToTBR(currentUser.uid, addBook)
    }
  }, [currentUser, addBook])

  useEffect(() => {
    if (currentUser) {
      getTBR(currentUser.uid)
        .then(tbr => {
          setTbr(tbr)
        })
    }
  }, [currentUser, bookAlert])

  return (
    <>
      <Card className='w-100' style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Új könyv hozzáadása az olvasmánylistához</h2>
          <Form>
            <Form.Group id="title" className='mb-3'>
              <Form.Control type='text' ref={titleRef} required placeholder='Cím' />
            </Form.Group>
            <Form.Group id="author" className='mb-3'>
              <Form.Control type='text' ref={authorRef} placeholder='Szerző' />
            </Form.Group>
            <Form.Group id="prompts" className='mb-3'>
              <Form.Label>Szempont</Form.Label>
              <Form.Select aria-label="Default select example" ref={promptRef} disabled={!isGuildChosen} required>
                {prompts.length > 0 && prompts.map((prompt, index) => <option key={index}>{prompt.promptName}</option>)}
                <option>Céhen kívüli olvasmány</option>
              </Form.Select>
              {emptyFieldAlert && <Alert variant='danger' dismissible onClose={() => setEmptyFieldAlert(false)} className='mt-2'>Tölts ki minden mezőt!</Alert>}
            </Form.Group>
            <Button type='submit' className='w-100 mt-2' onClick={handleSubmit}>Könyv listához adása</Button>
          </Form>
          {bookAlert && <Alert variant='success' className='mt-2' dismissible onClose={() => setBookAlert(false)}>Könyv listához adva!</Alert>}
        </Card.Body>
      </Card>

      <Row className='my-5'>
        <Row>
          <Col className='small-caps'>
            <h4>Az olvasmánylistád:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {tbr.length > 0
              ? <Row>
                <Col>
                  <ListGroup as="ol">
                    {tbr.map((book, index) => <TbrList key={index} book={book}/>)}
                  </ListGroup>
                </Col>
              </Row>
              : <h2>Még nem adtál hozzá könyvet a listához</h2>}
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default TBR