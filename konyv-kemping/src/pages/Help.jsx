import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

function Help() {
  return (
    <>
      <Card className='mt-2 mb-2 w-100 help-card' style={{ maxWidth: "600px" }}>
        <Card.Body>
          <Card.Title className='small-caps text-white'>Súgó</Card.Title>
          <Card.Text className='text-white'>
            Üdv a Könyv Kemping app oldalán! Itt találhatsz némi segítséget és útmutatást a használatához.
          </Card.Text>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="guild-card">
              Ahhoz, hogy az alkalmazást használni tudd, regisztrálni kell az oldalon. Regisztrálni <a href="/signup"><strong>itt</strong></a> tudsz. Ha már van fiókod, bejelenkezés után hozzáférsz a többi oldalhoz.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="guild-card">
                A főoldalon (<strong>Könyv Kemping</strong> vagy <strong>A kempingről</strong> menü alatt) találod az idei Könyv Kemping témáját, a közös könyveket, a céheket és a kemping fő szervezőjét bemutató részt. Itt tudsz céhet választani. Ha menet közben másik céhet szeretnél, csak nyomj rá a "Céh kiválasztása" gombra a szimpatikus céhnél.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="guild-card">
              Az <strong>Események</strong> menüpont alatt találhatók a Könyv Kemping beütemezett eseményei, platformmal és elérhetődégi linkkel. Amennyiben egy eseménynek még nincs linkje, úgy a hozzá tartozó gomb nem aktív. Az eseményeknél külön csoportban jelennek meg az adott napi események, illetve a későbbi események.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="guild-card">
              Az <strong>Olvasmánylista</strong> menüpont szolgál a Kempingre olvasott könyvek nyomkövetésére. Miután a főaldalon választasz céhet, a listához adandó könyvekhez szempontot is tudsz párosítani. Az elolvasott könyveket ki lehet pipálni, amelyik könyvet pedig mégsem szeretnéd a listádban, ki tudod törölni.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="guild-card">
              Az <strong>Profil</strong> menüpont mutatja a bejelentkezéshez használt adataidat. Itt van lehetőséged frissíteni az e-mail címedet és a jelszavadat. Illetve céh választása után itt látod a választott céhedet és a hozzá tartozó szempontokat, amelyeket teljesítés után ki tudsz pipálni. Fontos, ha új céhet választasz, akkor a korábbi szempontok és esetleges teljesítések már nem lesznek nyomonkövetve a profilodban, hanem az új céh szempontjai kerülnek a helyére.
            </ListGroup.Item>
            <ListGroup.Item as="li" className="guild-card">
              Ha bármi problémával találkoztok használat során vagy kérdésetek van, pingeljetek meg a <a href="https://discord.gg/m5tpSSG" target="_blank" rel='noreferrer'>Magyar Booktube Discordján</a> (@Matilda)!
            </ListGroup.Item>
            <ListGroup.Item as="li" className="guild-card">
              Kellemes Kempinget Mindnekinek!
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default Help