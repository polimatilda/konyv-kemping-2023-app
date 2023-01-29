import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { getTBR } from '../contexts/ManageData'
import TbrList from './TbrList'

function TbrBooks({setTbr, tbr, minBooks, isGuildChosen}) {

  const [bookStatusChange, setBookStatusChange] = useState(0)
  const [BooksProgress, setBooksProgress] = useState(0)

  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      getTBR(currentUser.uid)
        .then(tbr => {
          setTbr(tbr)
          setBooksProgress(tbr.filter((book) => book.isRead === true).length)

        })
    }
  }, [currentUser, setTbr, bookStatusChange])


  return (
    <>
      <Row className='my-5 d-flex justify-content-center align-items-center'>
        <Row>
          <Col className='small-caps'>
            <h4>Az olvasmánylistád:</h4>
          </Col>
        </Row>
       {isGuildChosen && <Row>
          <Col>
          <p>Minimum elolvasandó történetek: <strong>{minBooks}</strong>/<strong>{BooksProgress}</strong></p>
          </Col>
        </Row>}
        <Row>
          <Col>
            {tbr.length > 0
              ? <Row>
                <Col>
                  <ListGroup as="ol">
                    {tbr.map((book, index) => <TbrList key={index} book={book} setBookStatusChange={setBookStatusChange}/>)}
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

export default TbrBooks