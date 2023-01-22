import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../pictures/logo.png'
import Guild from '../components/Guild'
import book from '../pictures/book.jpg'

const guilds = [
  {
    name: "A Kódexmásoló Céh - Írnok",
    description: "Kódexmásolóként Te őrzöd a Föld minden tudását, ezért szerteágazó ismeretekre van szükséged. Ennek megfelelően sok zsánerben olvasol, a tudásod pedig nagy. Az írnoknak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve (tehát olvashatsz például három romatikusat és két ismeretterjesztőt, vagy 4 nem angol/magyar nyelvű dolgot és egy történelmi ifjúságit):",
    prompts: [
      "Történelmi fikció",
      "Történelmi ismeretterjesztő",
      "Történelmi romantikus",
      "Történelmi ifjúsági",
      "Nem angolszász vagy magyar"
    ]
  },
  {
    name: "A Kódexmásoló Céh - A könyvkötő",
    description: "Kódexmásolóként Te őrzöd a Föld minden tudását, ezért szerteágazó ismeretekre van szükséged. Ennek megfelelően sok zsánerben olvasol, a tudásod pedig nagy. A könyvkötőnek az alábbi szempontok szerint kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve (tehát olvashatsz például három barna kötetet és két ismeretterjesztőt, vagy 4 nem angol/magyar nyelvű dolgot és egy történelmi ifjúságit):",
    prompts: [
      "Barna vagy fehér borítós könyv",
      "Afrikai szerző",
      "Illusztrált kötet",
      "Egy kötet, ami különleges (pl. élfestett vagy aranyozott)",
      "Ismeretközlő irodalom",
      "Európai uniós szerző"
    ]
  },
  {
    name: "A Művész Céh",
    description: "Művészként te őrzöd a Föld, az emberiség kreativitását, ezért olyan történeteket kell olvasnod, amelyekben a művészetek nagy szerepet kapnak. Ha a Művészek közé szeretnél tartozni, az alábbi szempontok szerint kell 5 tetszőleges történetet elolvasnod, legalább három különböző pontot kilőve:",
    prompts: [
      "Képregény",
      "Mesekönyv",
      "Illusztrált kötet",
      "Egy művész (pl. festő, színész, író) életrajza",
      "Könyv, amelyben fontos szerepet kap a zene",
      "Könyv, amelyben fontos szerepet kapnak a filmek",
      "Kortárs szerző írta"
    ]
  },
  {
    name: "A Tótumfaktumok Céhe",
    description: "A Tótumfaktumok vagy Ezermesterek tartják karban az űrhajónkat. Munkájuk sokféle, és nagy felelősséggel jár, ezért az ő képzésük a legszigorúbb. Ha Tótumfaktum szeretnél lenni, az alábbi zsánerek MINDEGYIKÉBEN el kell olvasnod egy történetet. Maximum két novellát választhatsz, amelyek közül az egyik bármilyen lehet, a másiknak azonban valamelyik kijelölt zsánerbe kell tartoznia. Ezek közül bármelyik lehet fantasztikum is, de szerepeljen rajtuk az adott címke: tehát olvashattok pl. sci-fi thrillert és fantasy ifjúságit. És természetesen a képregény is ér!",
    prompts: [
      "Ökofikció/Cli-fi",
      "Thriller",
      "Kortárs",
      "Ifjúsági és gyermekirodalom",
      "Novella",
    ]
  },
  {
    name: "A Gyógyító Céh",
    description: "A Nyírfa gyógyítói felelősek a hajó lakóinak jólétéért, ezért ismereteik a gasztronómiára és a komfortra koncentrálódnak. Ha Gyógyító szeretnél lenni, az alábbi témakörökből kell öt történeted választanod, legalább két pontot kilőve",
    prompts: [
      "Gasztroregény",
      "Mágikus realizmus",
      "Romantikus történet",
      "Egy történet, amelyen szerepel a barátság címke",
      "Női szerző",
      "Női főszereplő",
      "Egy komfort olvasmány"
    ]
  },
  {
    name: "Az Álmodók Céhe - Akik a csillagokba tekintenek",
    description: "Az Álmodók őrzik az emberiség nagy álmait: mindazokat a dolgokat, amelyeket őseink megálmodtak: a jövőről, más világokról. Aki a csillagokba tekint, annak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve:",
    prompts: [
      "Sci-fi",
      "Egy történet, amelyen szerepel a posztmodern címke",
      "Képregény",
      "Egy sci-fi, amelynek nő a szerzője",
      "Egy társadalmi sci-fi",
      "Egy novella Kelly Linktől"
    ]
  },
  {
    name: "Az Álmodók Céhe - Akik ajtókat nyitnak",
    description: "Az Álmodók őrzik az emberiség nagy álmait: mindazokat a dolgokat, amelyeket őseink megálmodtak: a jövőről, más világokról. Aki ajtókat nyit, annak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve:",
    prompts: [
      "Fantasy",
      "Egy történet sárkányokkal",
      "Egy portál fantasy",
      "Egy díjnyertes történet",
      "Képregény",
      "Egy sorozat folytatása",
      "Egy fantasy történet, amelyekben iskola van"
    ]
  }
]

function KempingMain() {
  return (
    <Container fluid>
      <Row className="d-flex align-items-center">
        <Col lg>
          <img src={logo} className="img-fluid rounded" alt="konyv kemping logo" />
        </Col>
        <Col lg>
          <h1 className="text-center mt-5 mb-5">Kedves Kalandor!</h1>
          <p>Üdvözöllek a Nyírfa generációs űrhajó fedélzetén. Sokad magaddal szálltál fel erre a járműre, hogy eddig ismeretlen világokat járj be szerte a galaxisban. Egy ekkora gépet azonban nem könnyű fenntartani, ráadásul hosszú az út: fontos, hogy mindenki értsen valamihez. Ahhoz, hogy zökkenőmentes legyen az utazás, mesteremberekre lesz szükség, és mindenki kiválaszthatja, hogy mely területen szeretne tanulni. Ahhoz, hogy mesteremberré válj, <strong>5 történetet (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]) kell elolvasnod a céhed szempontjainak megfelelően. A pontok nem összevonhatóak.</strong></p>
          <p>Ha nem tudsz választani akkor lehet egy fő munkád, és mellette jártassá válhatsz egy másikban is. Ebben az esetben  <strong>6 történetet kell elolvasnod (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]): 4 történet tartozik a “fő” mesterségedhez, kettő pedig bármely másik általad választott mesterséghez.</strong></p>
        </Col>
      </Row>
      <Row className='mb-5 mt-5'>
        <Col>
          <h4 className='text-center my-3'>Közös könyv:</h4>
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col lg>
          <h3 className='text-center'>Mohamed Mbougar Sarr:</h3>
          <h1 className='text-center mb-5'>Az ​emberek legtitkosabb emlékezete</h1>
          <p>A ​kötet 2021-ben Franciaország legrangosabb irodalmi elismerésében részesült, elnyerte a Goncourt-díjat.</p>
          <p>2018-ban egy fiatal szenegáli író, Diégane Latyr Faye felfedez Párizsban egy legendás könyvet, az 1938-ban kiadott Az embertelenség labirintusát. A szerzőt úgy emlegették annak idején: a „néger Rimbaud”, de a műve által keltett botrány miatt eltűnt.
            Diégane nyomozni kezd a titokzatos T.C. Elimane után, és tragédiákkal szembesül. Közben Párizsban fiatal afrikai írók egy csoportjával jár össze; figyelik egymást, beszélgetnek, vitatkoznak, isznak, sokat szeretkeznek, és töprengenek a száműzetésbeli alkotás szükségességén.</p>
          <p>Az emberek legtitkosabb emlékezete villódzóan ötletes, lebilincselő olvasmány, melyben ott a választás állandó kényszere: írni vagy élni? Szerelmi vallomás az irodalomhoz és az irodalom időtlen hatalmához.</p>
          <p>Mohamed Mbougar Sarr 1990-ben született Szenegálban, Franciaországban él, eddig három regénye jelent meg. Magyarul ez az első könyve.</p>
        </Col>
        <Col lg className="d-flex justify-content-center">
          <img src={book} className="img-fluid rounded" alt="konyv kemping logo" />
        </Col>
      </Row>
      <Row>
        <Col>
        <h4 className='text-center my-3'>Céhek:</h4>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={2} className="my-4">
        {guilds.map((guild, index) => <Guild key={index} guild={guild} />)}
      </Row>
    </Container>
  )
}

export default KempingMain