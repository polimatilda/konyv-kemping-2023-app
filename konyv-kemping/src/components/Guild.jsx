import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import { Alert, Button, Card, ListGroup } from 'react-bootstrap'
import { updateGuild } from '../contexts/ManageData'
import { useEffect } from 'react'


function Guild({ guild, currentUser }) {

  const [chosenGuild, setChosenGuild] = useState([])
  const [alert, setAlert] = useState(false)

  const chooseGuild = () => {
    setChosenGuild(guild)
    setAlert(true)
  }

  useEffect(() => {
    if (currentUser && chosenGuild.name) {
      updateGuild(currentUser.uid, chosenGuild)
    }

  }, [chosenGuild, currentUser])

  return (
    <Col className="d-flex align-items-stretch">
      <Card className='mt-2 mb-2'>
        <Card.Body>
          <Card.Title className='small-caps'>{guild.name}</Card.Title>
          <Card.Text>
            {guild.description}
          </Card.Text>
          <Card.Text><i>Céhmester: </i>{guild.guildMaster}</Card.Text>
          <ListGroup as="ol" numbered>
            {guild.prompts.map((prompt, index) => <ListGroup.Item as="li" key={index} className="guild-card">{prompt.promptName}</ListGroup.Item>)}
          </ListGroup>
        </Card.Body>
        <Button onClick={chooseGuild} disabled={currentUser ? false : true}>Céh kiválasztása</Button>
        {alert && <Alert variant='success' className='mt-2 text-center'>Céh kiválasztva!</Alert>}
      </Card>
    </Col>
  )
}

export default Guild