import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Event from '../components/Event'
import { getEvents } from '../contexts/ManageData'

function Events() {

  const [todaysEvents, setTodaysEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  const date = new Date()
  const todaysDate = date.getFullYear() + ". " + (date.getMonth() + 1) + ". " + date.getDate() + "."
  console.log(todaysDate)

  useEffect(() => {
    getEvents().then((eventsData) => {
      setUpcomingEvents(eventsData.filter(event => {

        let todaysDateFilter = new Date(todaysDate.replace(/\./g, '-'))
        let dateFilter = new Date(event.date.replace(/\./g, '-'))
        
        return todaysDateFilter !== dateFilter && dateFilter > todaysDateFilter
      }))
    })
  }, [todaysDate])

  useEffect(() => {
    getEvents().then((eventsData) => {
      setTodaysEvents(eventsData.filter(event => todaysDate === event.date))
    })
  }, [todaysDate])

  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center small-caps">Mai események</h1>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={1} className="my-4">
        {todaysEvents.length > 0 ? todaysEvents.map((event, index) => <Event event={event} key={index} />) : <Col><p>Ma nincsenek események</p></Col>}
      </Row>
      <Row>
        <Col>
          <h1 className="text-center small-caps">Közelgő események</h1>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={1} className="my-4">
        {upcomingEvents.sort((a, b) => {
          let dateA = new Date(a.date.replace(/\./g, '-'))
          let dateB = new Date(b.date.replace(/\./g, '-'))
          return dateA - dateB
        }).map((event, index) => <Event event={event} key={index} />)}
      </Row>
    </>
  )
}

export default Events