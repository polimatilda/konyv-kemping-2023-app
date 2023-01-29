import React, { useEffect } from 'react'
import { useState } from 'react'
import { Alert, Button, Col, ListGroup, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { deleteBookFromTBR, updateBookStatus } from '../contexts/ManageData'

function TbrList({ book, setBookStatusChange }) {

  const { currentUser } = useAuth()

  const [bookRead, setBookRead] = useState(book.isRead)

  const [bookToDelete, setBookToDelete] = useState(false)
  const [bookId, setBookId] = useState("")

  const bookIsReadUpdate = () => {
    setBookRead(!bookRead)
    setBookId(book.id)
  }

  const deleteBook = () => {
    setBookId(book.id)
    setBookToDelete(true)
  }

  useEffect(() => {
    if (currentUser && bookId) {
      updateBookStatus(currentUser.uid, bookId, bookRead)
      .then(() => setBookStatusChange(oldValue => oldValue + 1))
    }
  }, [currentUser, bookId, bookRead])

  useEffect(() => {
    if (currentUser && bookId && bookToDelete) {
      deleteBookFromTBR(currentUser.uid, bookId)
    }
  }, [currentUser, bookId, bookToDelete])
  

  return (
    <>
      {bookToDelete ? <Alert variant='success' className='mt-2'>Könyv törölve</Alert> : <ListGroup.Item as="li" className={"guild-card d-flex justify-content-between align-items-center"}>
        <Col>
          <Row>
            <p className={'mb-0 small-caps' + (bookRead ? " prompt-done" : "")}>{book.author}:</p>
          </Row>
          <Row>
            <h4 className={'mb-0' + (bookRead ? " prompt-done" : "")}>{book.title}</h4>
          </Row>
          <Row className='mt-2'>
            <p className={'mb-0 prompt-align text-left' + (bookRead ? " prompt-done" : "")}>Szempont: {book.prompt}</p>
          </Row>
        </Col>
        <Row>
          <Col>
            <Button onClick={bookIsReadUpdate} className="d-flex justify-content-center align-items-center">
              {bookRead ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>}
            </Button>
          </Col>
          <Col>
            <Button className="d-flex justify-content-center align-items-center" onClick={deleteBook}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>}
    </>
  )
}

export default TbrList