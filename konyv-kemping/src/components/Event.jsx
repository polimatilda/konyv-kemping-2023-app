import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'

function Event({ event }) {

  return (
      <Col className='my-3'>
        <Card>
          <Card.Header className='text-white'>{event.date} {event.time}</Card.Header>
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
              {event.where}
            </Card.Text>
            <a href={event.link} target="_blank" rel='noreferrer'>
              <Button variant="primary">
                Ugrás az eseményre
              </Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default Event