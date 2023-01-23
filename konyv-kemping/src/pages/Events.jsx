import React from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Event from '../components/Event'

function Events() {

  const events = [
    {
      name: "Könyv Kemping 2023 bejelentő live",
      where: "YouTube",
      link: "https://www.youtube.com/@booksflyingaround",
      date: "2023. 1. 31.",
      time: "19:00"
    },
    {
      name: "Anti Read-in",
      where: "YouTube",
      link: "https://www.youtube.com/@booksflyingaround",
      date: "2023. 2. 12.",
      time: "19:00"
    },
    {
      name: "Read-in",
      where: "Discord",
      link: "https://www.youtube.com/@booksflyingaround",
      date: "2023. 2. 15.",
      time: "20:00"
    }
  ]

  const date = new Date()
  const todaysDate = date.getFullYear() + ". " + (date.getMonth() + 1) + ". " + date.getDate() + "."
  console.log(todaysDate)

  const [todaysEvents, setTodaysEvents] = useState(events.filter(event => todaysDate === event.date))

  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center small-caps">Mai események</h1>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={1} className="my-4">
          {todaysEvents.length > 0 ? todaysEvents.map((event, index) => <Event event={event} key={index}/>) : <Col><p>Ma nincsenek események</p></Col>}
      </Row>
      <Row>
        <Col>
          <h1 className="text-center small-caps">Közelgő események</h1>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={1} className="my-4">
        {events.filter((event => todaysDate !== event.date)).map((event, index) => <Event event={event} key={index} />)}
      </Row>
    </>
  )
}

export default Events