import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import bookOne from '../pictures/book.jpg'
import bookTwo from '../pictures/bookTwo.jpg'

function KempingBooks() {
  return (
    <>
      <Row className='mb-5 mt-5' id="readathon-choices">
        <Col>
          <h4 className='text-center my-3 small-caps'>Közös könyvek:</h4>
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col lg className='mb-3'>
          <h3 className='text-center small-caps'>Mohamed Mbougar Sarr:</h3>
          <h1 className='text-center mb-5'>Az ​emberek legtitkosabb emlékezete</h1>
          <p>A ​kötet 2021-ben Franciaország legrangosabb irodalmi elismerésében részesült, elnyerte a Goncourt-díjat.</p>
          <p>2018-ban egy fiatal szenegáli író, Diégane Latyr Faye felfedez Párizsban egy legendás könyvet, az 1938-ban kiadott Az embertelenség labirintusát. A szerzőt úgy emlegették annak idején: a „néger Rimbaud”, de a műve által keltett botrány miatt eltűnt.</p>
          <p>Diégane nyomozni kezd a titokzatos T.C. Elimane után, és tragédiákkal szembesül. Közben Párizsban fiatal afrikai írók egy csoportjával jár össze; figyelik egymást, beszélgetnek, vitatkoznak, isznak, sokat szeretkeznek, és töprengenek a száműzetésbeli alkotás szükségességén.</p>
          <p>Az emberek legtitkosabb emlékezete villódzóan ötletes, lebilincselő olvasmány, melyben ott a választás állandó kényszere: írni vagy élni? Szerelmi vallomás az irodalomhoz és az irodalom időtlen hatalmához.</p>
          <p>Mohamed Mbougar Sarr 1990-ben született Szenegálban, Franciaországban él, eddig három regénye jelent meg. Magyarul ez az első könyve.</p>
          <Button><a href="https://moly.hu/konyvek/mohamed-mbougar-sarr-az-emberek-legtitkosabb-emlekezete" target="_blank" rel='noreferrer' className='book-link'>További információ</a></Button>
        </Col>
        <Col lg className="d-flex justify-content-center">
          <img src={bookOne} className="img-fluid rounded" alt="konyv kemping kozos konyv" />
        </Col>
      </Row>
      <Row className="d-flex align-items-center my-5">
        <Col lg className="d-flex justify-content-center">
          <img src={bookTwo} className="img-fluid rounded" alt="konyv kemping kozos konyv" />
        </Col>
        <Col lg className='mb-3'>
          <h3 className='text-center mt-3 small-caps'>Joya Goffney:</h3>
          <h1 className='text-center mb-5'>Bocs, ​hadd bőgjem ki magam</h1>
          <p>Egy könyvsorozat, amelyen keresztül jobban megismerheted önmagad és a világ sokszínűségét.</p>
          <p>Quinn Jackson:</p>
          <ul>
            <li>fekete</li>
            <li>tizennyolc éves</li>
            <li>vegetáriánus</li>
            <li>krónikus listaíró</li>
            <li>nehezen barátkozik</li>
            <li>hazugságban él</li>
            <li>megzsarolták</li>
            <li>szembe kell néznie az igazsággal</li>
          </ul>
          <p>Quinn mindenről listát vezet az életében – a napokról, amikor bőgött; a fiúkról, akiket megcsókolna, és a dolgokról, amiket sosem vallana be senkinek. Azzal, hogy kiírja magából a problémáit, nem kell megbirkóznia velük a való életben. Egészen addig, amíg valaki el nem lopja a naplóját…</p>
          <Button><a href="https://moly.hu/konyvek/joya-goffney-bocs-hadd-bogjem-ki-magam" target="_blank" rel='noreferrer' className='book-link'>További információ</a></Button>
        </Col>
      </Row>
    </>
  )
}

export default KempingBooks