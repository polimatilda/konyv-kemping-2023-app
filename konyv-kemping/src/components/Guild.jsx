import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { updateGuild } from '../contexts/ManageData'
import { useEffect } from 'react'


function Guild({ guild }) {

  const { currentUser } = useAuth()

  const [chosenGuild, setChosenGuild] = useState([])

  const chooseGuild = () => {
    setChosenGuild(guild)
  }

  useEffect(() => {
    if(currentUser && chosenGuild.name) {
      updateGuild(currentUser.uid, chosenGuild)
    }
    
  }, [chosenGuild, currentUser])

  return (
    <Col className="d-flex align-items-stretch">
      <Card className='mt-2 mb-2'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title className='small-caps'>{guild.name}</Card.Title>
          <Card.Text>
            {guild.description}
          </Card.Text>
          <ListGroup as="ol" numbered>
            {guild.prompts.map((prompt, index) => <ListGroup.Item as="li" key={index} className="guild-card">{prompt.promptName}</ListGroup.Item>)}
          </ListGroup>
        </Card.Body>
        <Button onClick={chooseGuild}>Céh kiválasztása</Button>
      </Card>
    </Col>
  )
}

export default Guild