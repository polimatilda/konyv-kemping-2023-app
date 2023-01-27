import React, { useEffect } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { getTBR } from '../contexts/ManageData'
import TbrList from './TbrList'

function TbrBooks({setTbr, tbr}) {

  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      getTBR(currentUser.uid)
        .then(tbr => {
          setTbr(tbr)
        })
    }
  }, [currentUser, setTbr])


  return (
    <>
      <Row className='my-5 d-flex justify-content-center align-items-center'>
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

export default TbrBooks