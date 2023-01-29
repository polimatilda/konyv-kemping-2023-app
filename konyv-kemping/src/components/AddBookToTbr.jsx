import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { addToTBR } from '../contexts/ManageData'

function AddBookToTbr({setTbr, prompts, currentUser, isGuildChosen}) {

  const [emptyFieldAlert, setEmptyFieldAlert] = useState(false)
  const [addBook, setAddBook] = useState([])
  const [bookAlert, setBookAlert] = useState(false)

  const titleRef = useRef()
  const authorRef = useRef()
  const promptRef = useRef()

  const handleSubmit = async (event) => {
    
    event.preventDefault()

    if(titleRef.current.value && authorRef.current.value) {

      setAddBook(({
        id: Math.floor(Math.random() * 10000),
        title: titleRef.current.value,
        author: authorRef.current.value,
        prompt: promptRef.current.value,
        isRead: false
      }))
      
      setBookAlert(true)
      
    } else {
      setEmptyFieldAlert(true)
    }

    authorRef.current.value = ""
    titleRef.current.value = ""
    
  }

  useEffect(() => {
    if (currentUser && Object.keys(addBook).length > 0) {
      addToTBR(currentUser.uid, addBook)
      .then(() => setTbr(prevTbr => [...prevTbr, addBook]))
    }
  }, [currentUser, addBook])

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
    </>
  )
}

export default AddBookToTbr