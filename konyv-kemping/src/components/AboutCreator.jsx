import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Eszti from '../pictures/Eszti.jpg'

function AboutCreator() {
  return (
    <>
      <Row className='my-5' md={2} sm={1} xs={1} lg={2} id="creator">
        <Col className='d-flex justify-content-center align-items-center'>
          <img src={Eszti} alt="Eszti portré" className="img-fluid rounded mb-3 eszti-img" />
        </Col>
        <Col className='d-flex justify-content-center align-items-center flex-column'>
          <Row>
            <h4 className='text-center my-3 small-caps'>A kemping mögött</h4>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Card.Title>Eszti</Card.Title>
                <Card.Text>
                  A Könyv Kemping fő szervezője és tulajdonosa, Eszti, a booksflyingaround csatornáról. Ez a negyedik kemping, amit szervezett. Az első kempinget 2020-ban tartotta, és azóta is a magyar könyves közösség kedvenc readathonja.
                </Card.Text>
                <a href="https://www.youtube.com/@booksflyingaround" target="_blank" rel='noreferrer' className='d-flex justify-content-center creator-btn'>
                  <Button variant="primary">A booksflyingaround csatorna</Button>
                </a>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default AboutCreator