import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import AboutCreator from '../components/AboutCreator'
import KempingTheme from '../components/KempingTheme'
import KempingBooks from '../components/KempingBooks'
import Guilds from '../components/Guilds'

function KempingMain() {
  return (
    <Container fluid>
      <KempingTheme/>
      <KempingBooks/>
      <Guilds/>
      <AboutCreator/>
    </Container>
  )
}

export default KempingMain