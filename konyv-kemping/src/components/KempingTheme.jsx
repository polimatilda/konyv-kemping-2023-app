import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../pictures/logo.png'

function KempingTheme() {
  return (
    <>
      <Row className='mb-3'>
        <Col>
          <h1 className="text-center small-caps">Kedves Kalandor!</h1>
        </Col>
      </Row>
      <Row className="d-flex align-items-center mb-5">
        <Col lg>
          <img src={logo} className="img-fluid rounded mb-3" alt="konyv kemping logo" />
        </Col>
        <Col lg>
          <p>Üdvözöllek a Nyírfa generációs űrhajó fedélzetén. Sokad magaddal szálltál fel erre a járműre, hogy eddig ismeretlen világokat járj be szerte a galaxisban. Egy ekkora gépet azonban nem könnyű fenntartani, ráadásul hosszú az út: fontos, hogy mindenki értsen valamihez. Ahhoz, hogy zökkenőmentes legyen az utazás, mesteremberekre lesz szükség, és mindenki kiválaszthatja, hogy mely területen szeretne tanulni. Ahhoz, hogy mesteremberré válj, <strong>5 történetet (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]) kell elolvasnod a céhed szempontjainak megfelelően. A pontok nem összevonhatóak.</strong></p>
          <p>Ha nem tudsz választani akkor lehet egy fő munkád, és mellette jártassá válhatsz egy másikban is. Ebben az esetben  <strong>6 történetet kell elolvasnod (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]): 4 történet tartozik a “fő” mesterségedhez, kettő pedig bármely másik általad választott mesterséghez.</strong></p>
        </Col>
      </Row>
    </>
  )
}

export default KempingTheme