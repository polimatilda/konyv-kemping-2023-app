import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import PromptsProfile from './PromptsProfile'

function ProfileGuild({guild, setPromptStatusChange, promptsProgress}) {

  return (
    <>
      <Row className='my-5 d-flex justify-content-center align-items-center'>
        <Row>
          <Col className='small-caps'>
            <h4>A kempingen választott céhed:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {Object.keys(guild).length > 0
              ? <Row>
                <Col>
                  <h2 className='mb-3'>{guild.name}</h2>
                  <p>Minimum teljesítendő szempontok: <strong>{guild.minPrompts}</strong>/<strong>{promptsProgress}</strong></p>
                  <ListGroup as="ol">
                    {guild.prompts.map((prompt, index) => <PromptsProfile key={index} prompt={prompt} setPromptStatusChange={setPromptStatusChange}/>)}
                  </ListGroup>
                </Col>
              </Row>
              : <h2>Még nem választottál céhet</h2>}
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default ProfileGuild