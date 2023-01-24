import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../pictures/logo.png'
import Guild from '../components/Guild'
import book from '../pictures/book.jpg'
import bookTwo from '../pictures/bookTwo.jpg'

const guilds = [
  {
    name: "A Kódexmásoló Céh - Írnok",
    description: "Kódexmásolóként Te őrzöd a Föld minden tudását, ezért szerteágazó ismeretekre van szükséged. Ennek megfelelően sok zsánerben olvasol, a tudásod pedig nagy. Az írnoknak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve (tehát olvashatsz például három romatikusat és két ismeretterjesztőt, vagy 4 nem angol/magyar nyelvű dolgot és egy történelmi ifjúságit):",
    prompts: [
      {promptName: "Történelmi fikció", isCompleted: false},
      {promptName: "Történelmi ismeretterjesztő", isCompleted: false},
      {promptName: "Történelmi romantikus", isCompleted: false},
      {promptName: "Történelmi ifjúsági", isCompleted: false},
      {promptName: "Nem angolszász vagy magyar", isCompleted: false}
    ]
  },
  {
    name: "A Kódexmásoló Céh - A könyvkötő",
    description: "Kódexmásolóként Te őrzöd a Föld minden tudását, ezért szerteágazó ismeretekre van szükséged. Ennek megfelelően sok zsánerben olvasol, a tudásod pedig nagy. A könyvkötőnek az alábbi szempontok szerint kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve (tehát olvashatsz például három barna kötetet és két ismeretterjesztőt, vagy 4 nem angol/magyar nyelvű dolgot és egy történelmi ifjúságit):",
    prompts: [
      {promptName: "Barna vagy fehér borítós könyv", isCompleted: false},
      {promptName: "Afrikai szerző", isCompleted: false},
      {promptName: "Illusztrált kötet", isCompleted: false},
      {promptName: "Egy kötet, ami különleges (pl. élfestett vagy aranyozott)", isCompleted: false},
      {promptName: "Ismeretközlő irodalom", isCompleted: false},
      {promptName: "Európai uniós szerző", isCompleted: false},
    ]
  },
  {
    name: "A Művész Céh",
    description: "Művészként te őrzöd a Föld, az emberiség kreativitását, ezért olyan történeteket kell olvasnod, amelyekben a művészetek nagy szerepet kapnak. Ha a Művészek közé szeretnél tartozni, az alábbi szempontok szerint kell 5 tetszőleges történetet elolvasnod, legalább három különböző pontot kilőve:",
    prompts: [
      {promptName: "Képregény", isCompleted: false},
      {promptName: "Mesekönyv", isCompleted: false},
      {promptName: "Illusztrált kötet", isCompleted: false},
      {promptName: "Egy művész (pl. festő, színész, író) életrajza", isCompleted: false},
      {promptName: "Könyv, amelyben fontos szerepet kap a zene", isCompleted: false},
      {promptName: "Könyv, amelyben fontos szerepet kapnak a filmek", isCompleted: false},
      {promptName: "Kortárs szerző írta", isCompleted: false},
    ]
  },
  {
    name: "A Tótumfaktumok Céhe",
    description: "A Tótumfaktumok vagy Ezermesterek tartják karban az űrhajónkat. Munkájuk sokféle, és nagy felelősséggel jár, ezért az ő képzésük a legszigorúbb. Ha Tótumfaktum szeretnél lenni, az alábbi zsánerek MINDEGYIKÉBEN el kell olvasnod egy történetet. Maximum két novellát választhatsz, amelyek közül az egyik bármilyen lehet, a másiknak azonban valamelyik kijelölt zsánerbe kell tartoznia. Ezek közül bármelyik lehet fantasztikum is, de szerepeljen rajtuk az adott címke: tehát olvashattok pl. sci-fi thrillert és fantasy ifjúságit. És természetesen a képregény is ér!",
    prompts: [
      {promptName: "Ökofikció/Cli-fi", isCompleted: false},
      {promptName: "Thriller", isCompleted: false},
      {promptName: "Kortárs", isCompleted: false},
      {promptName: "Ifjúsági és gyermekirodalom", isCompleted: false},
      {promptName: "Novella", isCompleted: false},
    ]
  },
  {
    name: "A Gyógyító Céh",
    description: "A Nyírfa gyógyítói felelősek a hajó lakóinak jólétéért, ezért ismereteik a gasztronómiára és a komfortra koncentrálódnak. Ha Gyógyító szeretnél lenni, az alábbi témakörökből kell öt történeted választanod, legalább két pontot kilőve",
    prompts: [
      {promptName: "Gasztroregény", isCompleted: false},
      {promptName: "Mágikus realizmus", isCompleted: false},
      {promptName: "Romantikus történet", isCompleted: false},
      {promptName: "Egy történet, amelyen szerepel a barátság címke", isCompleted: false},
      {promptName: "Női szerző", isCompleted: false},
      {promptName: "Női főszereplő", isCompleted: false},
      {promptName: "Egy komfort olvasmány", isCompleted: false},
    ]
  },
  {
    name: "Az Álmodók Céhe - Akik a csillagokba tekintenek",
    description: "Az Álmodók őrzik az emberiség nagy álmait: mindazokat a dolgokat, amelyeket őseink megálmodtak: a jövőről, más világokról. Aki a csillagokba tekint, annak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve:",
    prompts: [
      {promptName: "Sci-fi", isCompleted: false},
      {promptName: "Egy történet, amelyen szerepel a posztmodern címke", isCompleted: false},
      {promptName: "Képregény", isCompleted: false},
      {promptName: "Egy sci-fi, amelynek nő a szerzője", isCompleted: false},
      {promptName: "Egy társadalmi sci-fi", isCompleted: false},
      {promptName: "Egy novella Kelly Linktől", isCompleted: false},
    ]
  },
  {
    name: "Az Álmodók Céhe - Akik ajtókat nyitnak",
    description: "Az Álmodók őrzik az emberiség nagy álmait: mindazokat a dolgokat, amelyeket őseink megálmodtak: a jövőről, más világokról. Aki ajtókat nyit, annak az alábbi témakörökben kell olvasnia 5 tetszőleges történetet, legalább két különböző pontot kilőve:",
    prompts: [
      {promptName: "Fantasy", isCompleted: false},
      {promptName: "Egy történet sárkányokkal", isCompleted: false},
      {promptName: "Egy portál fantasy", isCompleted: false},
      {promptName: "Egy díjnyertes történet", isCompleted: false},
      {promptName: "Képregény", isCompleted: false},
      {promptName: "Egy sorozat folytatása", isCompleted: false},
      {promptName: "Egy fantasy történet, amelyekben iskola van", isCompleted: false},
    ]
  }
]

function KempingMain() {
  return (
    <Container fluid>
      <Row className='mb-3'>
        <Col>
          <h1 className="text-center small-caps">Kedves Kalandor!</h1>
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col lg>
          <img src={logo} className="img-fluid rounded mb-3" alt="konyv kemping logo" />
        </Col>
        <Col lg>
          <p>Üdvözöllek a Nyírfa generációs űrhajó fedélzetén. Sokad magaddal szálltál fel erre a járműre, hogy eddig ismeretlen világokat járj be szerte a galaxisban. Egy ekkora gépet azonban nem könnyű fenntartani, ráadásul hosszú az út: fontos, hogy mindenki értsen valamihez. Ahhoz, hogy zökkenőmentes legyen az utazás, mesteremberekre lesz szükség, és mindenki kiválaszthatja, hogy mely területen szeretne tanulni. Ahhoz, hogy mesteremberré válj, <strong>5 történetet (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]) kell elolvasnod a céhed szempontjainak megfelelően. A pontok nem összevonhatóak.</strong></p>
          <p>Ha nem tudsz választani akkor lehet egy fő munkád, és mellette jártassá válhatsz egy másikban is. Ebben az esetben  <strong>6 történetet kell elolvasnod (ebből háromnak könyvnek vagy kisregénynek kell lennie [képregények és képes könyvek is számítanak!]): 4 történet tartozik a “fő” mesterségedhez, kettő pedig bármely másik általad választott mesterséghez.</strong></p>
        </Col>
      </Row>
      <Row className='mb-5 mt-5' id="readathon-choices">
        <Col>
          <h4 className='text-center my-3 small-caps'>Közös könyvek:</h4>
        </Col>
      </Row>
      <Row className="d-flex align-items-center">
        <Col lg>
          <h3 className='text-center small-caps'>Mohamed Mbougar Sarr:</h3>
          <h1 className='text-center mb-5'>Az ​emberek legtitkosabb emlékezete</h1>
          <p>A ​kötet 2021-ben Franciaország legrangosabb irodalmi elismerésében részesült, elnyerte a Goncourt-díjat.</p>
          <p>2018-ban egy fiatal szenegáli író, Diégane Latyr Faye felfedez Párizsban egy legendás könyvet, az 1938-ban kiadott Az embertelenség labirintusát. A szerzőt úgy emlegették annak idején: a „néger Rimbaud”, de a műve által keltett botrány miatt eltűnt.</p>
          <p>Diégane nyomozni kezd a titokzatos T.C. Elimane után, és tragédiákkal szembesül. Közben Párizsban fiatal afrikai írók egy csoportjával jár össze; figyelik egymást, beszélgetnek, vitatkoznak, isznak, sokat szeretkeznek, és töprengenek a száműzetésbeli alkotás szükségességén.</p>
          <p>Az emberek legtitkosabb emlékezete villódzóan ötletes, lebilincselő olvasmány, melyben ott a választás állandó kényszere: írni vagy élni? Szerelmi vallomás az irodalomhoz és az irodalom időtlen hatalmához.</p>
          <p>Mohamed Mbougar Sarr 1990-ben született Szenegálban, Franciaországban él, eddig három regénye jelent meg. Magyarul ez az első könyve.</p>
        </Col>
        <Col lg className="d-flex justify-content-center">
          <img src={book} className="img-fluid rounded" alt="konyv kemping kozos konyv" />
        </Col>
      </Row>
      <Row className="d-flex align-items-center my-5">
        <Col lg className="d-flex justify-content-center">
          <img src={bookTwo} className="img-fluid rounded" alt="konyv kemping kozos konyv" />
        </Col>
        <Col lg>
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
        </Col>
      </Row>
      <Row id="guilds">
        <Col>
          <h4 className='text-center my-3 small-caps'>Céhek:</h4>
        </Col>
      </Row>
      <Row md={1} sm={1} xs={1} lg={2} className="my-4">
        {guilds.map((guild, index) => <Guild key={index} guild={guild} />)}
      </Row>
    </Container>
  )
}

export default KempingMain