import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import AboutCreator from '../components/AboutCreator'
import KempingTheme from '../components/KempingTheme'
import KempingBooks from '../components/KempingBooks'
import Guilds from '../components/Guilds'
import { Col, Row } from 'react-bootstrap'

function KempingMain() {
  return (
    <Container fluid>
      <KempingTheme/>
      <Row>
        <Col>
          <p className='text-center mb-0 date-of-kemping'>A Könyv Kemping <strong>2023. február 11-25.</strong> között tart.</p>
        </Col>
      </Row>
      <KempingBooks/>
      <Guilds/>
      <AboutCreator/>
    </Container>
  )
}

export default KempingMain