import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Alert, Button, Card, Col, Form } from 'react-bootstrap'
import { updateGuild } from '../contexts/ManageData'

function SubGuild({ guilds, currentUser }) {

  const [alert, setAlert] = useState(false)

  const [multiGuild, setMultiGuild] = useState({})

  const mainGuildRef = useRef()
  const subGuildRefOne = useRef()
  const subGuildRefTwo = useRef()

  const handleSubmit = () => {
    const mainGuild = guilds.filter(guild => guild.name === mainGuildRef.current.value)
    const subGuildOne = guilds.filter(guild => guild.name === subGuildRefOne.current.value)
    const subGuildTwo = guilds.filter(guild => guild.name === subGuildRefTwo.current.value)

    const allGuildPrompts = [...mainGuild[0].prompts, ...subGuildOne[0].prompts, ...subGuildTwo[0].prompts]

    const filteredPrompts = allGuildPrompts.reduce((acc, curr) => {
      const found = acc.find(obj => 
        Object.entries(obj).every(([key, val]) => 
          curr[key] === val
        )
      )
      if (!found) acc.push(curr);
      return acc

    }, [])

    setMultiGuild({
      name: mainGuild[0].name,
      description: "Mellékcéhek: " + subGuildOne[0].name + ", " + subGuildTwo[0].name,
      prompts: [...filteredPrompts],
      minPrompts: 6,
      minStories: 6
    })

    setAlert(true)

    console.log(multiGuild)
  }

  useEffect(() => {
    if (currentUser && multiGuild.name) {
      updateGuild(currentUser.uid, multiGuild)
    }

  }, [multiGuild, currentUser])

  return (
    <Col className="d-flex align-items-stretch">
      <Card className='mt-2 mb-2'>
        <Card.Body>
        <Card.Title className='small-caps'>Tartozz több céhhez!</Card.Title>
          <Card.Text>
            Ha nem tudsz választani akkor lehet egy fő munkád, és mellette jártassá válhatsz egy másikban is. Ebben az esetben 6 történetet kell elolvasnod (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]): 4 történet tartozik a “fő” mesterségedhez, kettő pedig bármely másik általad választott mesterséghez. (Ha csak egy másodlagos céhet szeretnél kiválasztani, mindkét mellékcéh opciónál válaszd azt.)
          </Card.Text>
          <Form>
            <Form.Group id="main-guild" className='mb-3'>
              <Form.Label>Fő céh</Form.Label>
              <Form.Select aria-label="Default select example" required ref={mainGuildRef}>
                {guilds.map((guild, index) => <option key={index}>{guild.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group id="sub-guild-one" className='mb-3'>
              <Form.Label>Mellékcéh 1.</Form.Label>
              <Form.Select aria-label="Default select example" required ref={subGuildRefOne}>
                {guilds.map((guild, index) => <option key={index}>{guild.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group id="sub-guild-two" className='mb-3'>
              <Form.Label>Mellékcéh 2.</Form.Label>
              <Form.Select aria-label="Default select example" required ref={subGuildRefTwo}>
                {guilds.map((guild, index) => <option key={index}>{guild.name}</option>)}
              </Form.Select>
            </Form.Group>
          </Form>
        </Card.Body>
        <Button type='submit' className='w-100 mt-2' onClick={handleSubmit} disabled={currentUser ? false : true}>Céhek kiválasztása</Button>
        {alert && <Alert variant='success' className='mt-2 text-center'>Céh kiválasztva!</Alert>}
      </Card>
    </Col>
  )
}

export default SubGuild