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
          {event.host && <Card.Text><i>Host: </i>{event.host}</Card.Text>}
          <Button variant="primary" disabled={event.link === "" ? true : false}>
            <a href={event.link} target="_blank" rel='noreferrer' className='event-link'>
              Ugrás az eseményre
            </a>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Event